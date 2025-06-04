// @mui
import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Container,
  Typography,
  Button,
  Card,
  Stack,
  Divider,
  CircularProgress
} from "@mui/material";
// hooks
import useResponsive from "../hooks/useResponsive";
// layouts
import Layout from "../layouts";
// components
import Page from "../components/Page";
// sections
import PaymentBillingAddress from "@/sections/payment/PaymentBillingAddress";
import PaymentMethods from "@/sections/payment/PaymentMethods";
import NextLink from "next/link";
import { PATH_PAGE } from "@/routes/paths";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { loadStripe } from '@stripe/stripe-js';
// ----------------------------------------------------------------------

// Initialize Stripe with your publishable key
// Replace 'your_stripe_publishable_key' with your actual Stripe publishable key
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const RootStyle = styled("div")(({ theme }) => ({
  minHeight: "100%",
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

Payment.getLayout = function getLayout(page) {
  return <Layout variant="logoOnly">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Payment() {
  const isDesktop = useResponsive("up", "md");
  const router = useRouter();
  const [planData, setPlanData] = useState({
    license: "",
    price: 0,
    planType: ""
  });
  const [loading, setLoading] = useState(false);

  // Get plan data from query parameters or localStorage
  useEffect(() => {
    if (router.isReady) {
      const { license, price, planType } = router.query;

      if (license && price) {
        setPlanData({
          license: String(license),
          price: Number(price),
          planType: String(planType || "")
        });
      } else {
        // Fallback to localStorage if query params are not available
        const storedPlan = localStorage.getItem("selectedPlan");
        if (storedPlan) {
          setPlanData(JSON.parse(storedPlan));
        }
      }
    }
  }, [router.isReady, router.query]);

  // Format the price with commas and dollar sign
  const formattedPrice = planData.price
    ? `$${planData.price.toLocaleString()}`
    : "$0";

  return (
    <Page title="Payment">
      <RootStyle>
        <Container>
          <NextLink href={PATH_PAGE.product} passHref legacyBehavior>
            <Button startIcon={<Icon icon="eva:arrow-back-fill" />}>
              Back
            </Button>
          </NextLink>
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h3"
              align="center"
              paragraph
              sx={{ letterSpacing: 7, fontWeight: { xs: "regular", md: 500 } }}
            >
              READY TO ENROLL?
            </Typography>
            <Typography
              variant="h4"
              align="center"
              sx={{ letterSpacing: 7, fontWeight: { xs: "regular", md: 500 } }}
            >
              Let's do this.
            </Typography>
          </Box>

          <Grid container spacing={isDesktop ? 3 : 5}>
            <Grid item xs={12} md={12}>
              <Box
                sx={{
                  display: "grid",
                  gap: 5,
                  p: { md: 5 },
                  borderRadius: 2,
                  border: (theme) => ({
                    md: `dashed 1px ${theme.palette.divider}`
                  })
                }}
              >
                <PaymentBillingAddress />
                <PaymentMethods />
              </Box>
            </Grid>
            {/* <Grid item xs={12} md={4}>
              <PaymentSummary
                planData={planData}
                formattedPrice={formattedPrice}
                loading={loading}
                setLoading={setLoading}
              />
            </Grid> */}
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

function PaymentSummary({ planData, formattedPrice, loading, setLoading }) {
  const handleCheckout = async () => {
    try {
      setLoading(true);

      // Create a checkout session on your server
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          license: planData.license,
          planType: planData.planType,
          amount: planData.price,
          currency: "usd"
        })
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const session = await response.json();

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id
      });

      if (error) {
        console.error("Error redirecting to checkout:", error);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card sx={{ p: 3, minHeight: "100%" }}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Order Summary
      </Typography>

      <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Plan
          </Typography>
          <Typography variant="subtitle2">{planData.license}</Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Type
          </Typography>
          <Typography variant="subtitle2">{planData.planType}</Typography>
        </Stack>

        <Divider />

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">{formattedPrice}</Typography>
        </Stack>

        <Button
          fullWidth
          size="large"
          variant="contained"
          sx={{ mt: 2 }}
          //   onClick={handleCheckout}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Complete Checkout"
          )}
        </Button>
      </Stack>
    </Card>
  );
}
