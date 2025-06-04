import PropTypes from "prop-types";
import { m } from "framer-motion";
import { useRouter } from "next/router";
// @mui
import { useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Card,
  Link,
  Stack,
  Button,
  Divider,
  Container,
  Typography
} from "@mui/material";
// components
import Image from "../../components/Image";
import Iconify from "../../components/Iconify";
import { varFade, MotionViewport } from "../../components/animate";
import { PATH_PAGE } from "@/routes/paths";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(15, 0)
  }
}));

const _homePlans = [
  {
    license: "Tier 1 Individual Packages",
    price: "$12,500",
    type: ["In Person Package"],
    commons: [
      "A high-impact, three-day immersive residency designed to equip you with the skills to build, lead, and scale"
    ],
    options: [
      "Build a powerhouse team.",
      "Forge meaningful relationships.",
      "Master the art of storytelling for business success."
    ],
    description:
      "After the residency, apply your learning through a four-week team-based business simulation with expert coaching.",
    icons: ["/assets/icons/basic-plan.svg"]
  },
  {
    license: "Tier 1 Individual Packages",
    price: "$20,000",
    commons: [
      "Take it further with personalized mentorship and extended learning. This package includes everything in the In-Person Package, PLUS"
    ],
    type: [
      "Enhanced In-Person Package.",
      "(Add-on only – must complete the In-Person Package first)"
    ],
    options: [
      "Six one-on-one mentorship sessions tailored to your goals with insights from Vertria Vantage.",
      "Six months of community access for continued growth, networking, and support.",
      "Pitch Day Prep & Presentation – Work with your mentor to refine your pitch and present it for real-time marketability and feasibility feedback."
    ],
    description: "",
    icons: [
      "/assets/icons/standard-plan.svg",
      "/assets/icons/more-features.svg"
    ]
  },
  {
    license: "Tier 2: Bundle Package",
    price: "$25,000",
    type: ["In-Person Package + Enhanced In-Person Package"],
    commons: [],
    options: [
      "Save $7,500 when you bundle!.",
      "Gain exclusive access to the Vertria Vantage Assessment – a data-driven insight tool to personalize your entrepreneurial journey.",
      "Custom mentor-matching to align with your goals and accelerate success."
    ],
    description: "",
    icons: [
      "/assets/icons/standard-plus.svg",
      "/assets/icons/full-customization.svg",
      "/assets/icons/premium-support.svg"
    ]
  }
];

// ----------------------------------------------------------------------

export default function HomePricingPlans() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Grid
          container
          spacing={5}
          sx={{
            alignItems: "stretch" // This ensures all grid items stretch to match the tallest one
          }}
        >
          {_homePlans.map((plan) => (
            <Grid
              key={plan.license + plan.type}
              item
              xs={12}
              md={4}
              sx={{
                display: "flex" // Make grid items use flex
              }}
            >
              {" "}
              <m.div
                variants={
                  plan.license === "Tier 2: Bundle Package"
                    ? varFade().inDown
                    : varFade().inUp
                }
              >
                <PlanCard plan={plan} />
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

PlanCard.propTypes = {
  plan: PropTypes.shape({
    license: PropTypes.string,
    price: PropTypes.string,
    type: PropTypes.string,
    commons: PropTypes.arrayOf(PropTypes.string),
    icons: PropTypes.arrayOf(PropTypes.string),
    options: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string
  })
};

function PlanCard({ plan }) {
  const { license, price, type, commons, options, icons, description } = plan;
  const router = useRouter();

  const standard = license === "Tier 1 : Individual Packages";
  const plus = license === "Tier 2: Bundle Package";

  // Function to handle the plan selection
  const handleChoosePlan = () => {
    // Remove dollar sign and convert to number
    const priceValue = parseFloat(price.replace("$", "").replace(",", ""));

    // Create payload with plan details
    const planData = {
      license,
      price: priceValue,
      planType: type
    };

    // Navigate to checkout with query parameters
    router.push({
      pathname: PATH_PAGE.checkout,
      query: planData
    });

    // You can also store this in localStorage if needed for persistence
    localStorage.setItem("selectedPlan", JSON.stringify(planData));
  };

  return (
    <Card
      sx={{
        p: 5,
        boxShadow: 0,
        height: { md: "100%" }, // Make all cards same height on md screens and up
        display: "flex", // Use flex display
        flexDirection: "column", // Stack children vertically
        // ...(plus && {
        //   boxShadow: (theme) => theme.customShadows.z24
        // })
        backgroundColor: "#fff"
      }}
    >
      <Stack spacing={2} sx={{ height: "100%" }}>
        <div>
          <Typography variant="h6">{license}</Typography>
        </div>

        <Typography variant="h5" sx={{ color: "primary.main" }}>
          {price}
        </Typography>

        <Stack spacing={1}>
          {type.map((type, index) => {
            return (
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {type}
              </Typography>
            );
          })}
        </Stack>

        {standard ? (
          <Image alt="package" src={icons[0]} sx={{ width: 40, height: 40 }} />
        ) : (
          <Stack direction="row" spacing={1}>
            {icons.map((icon) => (
              <Image
                key={icon}
                alt="package"
                src={icon}
                sx={{ width: 40, height: 40 }}
              />
            ))}
          </Stack>
        )}

        <Stack spacing={2.5}>
          {commons.map((option) => (
            <Stack
              key={option}
              spacing={1}
              direction="row"
              alignItems="center"
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {/* <Iconify
                  icon="eva:checkmark-fill"
                  sx={{ color: "primary.main", width: 16, height: 16 }}
                /> */}
              </Box>
              {/* <Iconify icon={"eva:checkmark-fill"} /> */}
              <Typography variant="body2">{option}</Typography>
            </Stack>
          ))}

          <Divider sx={{ borderStyle: "dashed" }} />

          {options.map((option, optionIndex) => {
            const disabledLine =
              (standard && optionIndex === 1) ||
              (standard && optionIndex === 2) ||
              (standard && optionIndex === 3) ||
              (plus && optionIndex === 3);

            return (
              <Stack
                spacing={1}
                direction="row"
                alignItems="center"
                sx={{
                  ...(disabledLine && { color: "text.disabled" })
                }}
                key={option}
              >
                <Iconify
                  icon={"eva:checkmark-fill"}
                  sx={{
                    width: 16,
                    height: 16,
                    color: "primary.main",
                    ...(disabledLine && { color: "text.disabled" })
                  }}
                />
                <Typography variant="body2" sx={{maxWidth: 250}}>{option}</Typography>
              </Stack>
            );
          })}
        </Stack>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Button
          size="large"
          fullWidth
          // variant="outlined"
          onClick={handleChoosePlan}
          sx={{ mt: 5, border: "1px solid #E2E5E9", color: '#060606', fontWeight: 'regular' }}
        >
          Buy Now
        </Button>
      </Stack>
    </Card>
  );
}
