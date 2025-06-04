import PropTypes from "prop-types";
import { useState } from "react";
import { m } from "framer-motion";
import {
  Box,
  Card,
  Button,
  Container,
  Typography,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import { MotionViewport } from "../../components/animate";
import { Icon } from "@iconify/react";

const RootStyle = styled(m.div)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.background.default,
  backgroundSize: "cover",
  backgroundPosition: "center",
  [theme.breakpoints.up("lg")]: {
    display: "flex",
    alignItems: "center",
    height: "100%"
  }
}));

const _carouselsMembers = [
  {
    id: "member-1",
    name: "ALEC MILNE",
    role: "OWNER",
    avatar: "/assets/images/avatars/alec-milne-mentor1.png",
    description: [
      "Alec, a proud Carleton University Commerce graduate, discovered his passion for entrepreneurship after exploring various career paths. In 1995, with just $10,000 and no savings, he and a friend launched their first business. Since then, Alec has founded and grown over a dozen startups across diverse industries, generating over $1 billion in revenue. His bold decision-making and relentless drive have been key to his success.",
      "As the founder of Vertria, Alec channels his passion into a vision that extends beyond individual success. At Vertria, we believe education is essential—not just for personal growth and business acumen, but for driving sustainability and positive global change. It’s not enough to gain knowledge and set a path for the future; it’s about asking, What are you doing to better the world?",
      "Outside of his professional endeavors, Alec enjoys time outdoors with his wife, Anne, splitting their time between Ottawa, Canada, and Tivat, Montenegro, where they embrace the beauty of nature and life’s simple joys."
    ]
  },
  {
    id: "member-2",
    name: "VICTORIA RAISH",
    role: "OWNER/LEARNING",
    avatar: "/assets/images/team/raish.png",
    description: [
      "Victoria Raish, PhD, is a globally recognized expert in designing innovative learning experiences that align with organizational missions and learner goals. With degrees from Penn State University and the University of Southern California, she has published extensively on microlearning, digital credentials, learning spaces, and online education.",
      "Victoria's leadership spans research universities, nonprofits, Fortune 500 companies, and startups. She is the owner of Vertria and Head of Learning Design at Nexford University, driven by a passion for empowering individuals and fostering a more connected global society.",
      "Vertria thrives on a positive, diverse team, dedicated to creating opportunities for talented, driven people to change their lives—and the world."
    ]
  },
  {
    id: "member-3",
    name: "DR. HIBA KHALED",
    role: "OWNER/LEARNING",
    avatar: "/assets/images/team/dr.khaled.png",
    description: [
      "Dr. Hiba Khaled’s career spans continents and disciplines, reflecting her dedication to addressing global challenges through innovation and leadership. She has worked with the National Health Service in the UK, served in resource-constrained hospitals in Uganda, and taught at Harvard Medical School and Harvard Kennedy School alongside world-renowned leadership expert Dr. Ron Heifetz. Her work in leadership consulting further solidified her commitment to empowering others to create meaningful change.",
      "As an entrepreneur, Dr. Khaled combines her expertise in medicine, leadership, and innovation through her ventures in wellness technology and Vertria.",
      "Dr. Khaled brings her vision of harnessing creativity and innovation to address the world’s toughest challenges. Her leadership helps guide Vertria’s mission to equip individuals with the tools and mindset to create solutions that better themselves and the planet, ensuring that every step forward leaves a positive and lasting impact."
    ]
  },
  {
    id: "member-4",
    name: "NICOLE BENNETT",
    role: "OWNER/SALES AND OPS",
    avatar: "/assets/images/avatars/nicole-bennett.png",
    description: [
      "Nicole Bennett is a dynamic entrepreneur with a diverse career spanning healthcare, technology, and construction. Starting young, she built wealth and launched businesses to empower stay-at-home moms with income opportunities. With nursing experience and expertise in analytics, Nicole played a key role in driving startup profitability before transitioning into construction design, where her passion for technology flourished.",
      "Her entrepreneurial spirit led to founding a project management company with a technology design team, and for the past six years, she has successfully led her own company. Passionate about innovation, Nicole focuses on leveraging technology to inspire others and create opportunities for a brighter future.",
      "For Nicole, Vertria is deeply personal. As a mother of four children pursuing careers in engineering and business, she views it as a tool to guide individuals in unlocking their potential, building self-awareness, and confidently navigating their paths. Beyond her work, Nicole is devoted to inspiring the next generation to dream big and lead with purpose, leaving a lasting impact on future leaders."
    ]
  },
  {
    id: "member-5",
    name: "MARIE FRASER",
    role: "OWNER/LEARNING",
    avatar: "/assets/images/avatars/marie-frasier.png",
    description: [
      "Marie Fraser is a seasoned entrepreneur with a history of success across diverse industries. From owning luxury dog kennels to launching and scaling multiple businesses, including a successful exit, her dedication and expertise have set her apart.",
      "Marie now focuses on innovative solutions to global challenges, leading a groundbreaking business dedicated to carbon offsets. By supporting farmers, partnering with governments, and promoting sustainable practices, she is committed to combating climate change.",
      "Vertria resonates deeply with Marie as the resource she wished for during her entrepreneurial journey. It embodies her mission to equip future leaders with the tools, knowledge, and networks to succeed while making meaningful contributions to the world.",
      "Passionate about sustainability and positive impact, Marie’s leadership inspires change, creating solutions that benefit people, businesses, and the planet."
    ]
  },
  {
    id: "member-6",
    name: "DEL TITUS BAWUAH",
    role: "STRATEGIC PARTNERSHIPS",
    avatar: "/assets/images/team/del.png",
    description: [
      "Del Titus Bawuah is a visionary leader dedicated to transforming Africa’s digital and economic landscape. As a pioneering force in blockchain technology, decentralized finance, and innovative policy frameworks, Del is committed to driving sustainable growth and empowering Africa and its diaspora. With a focus on leveraging Web3 solutions for climate action and cultural preservation, he champions global initiatives that blend technology, sustainability, and socio-economic impact.",
      "Del’s work transcends traditional boundaries, as he continues to influence key global conversations at the intersection of innovation, economic development, and digital transformation."
    ]
  }
];

export default function TeamMembers() {
  return (
    <RootStyle>
      <Container component={MotionViewport} sx={{ pb: 5, textAlign: "center" }}>
        <Grid container spacing={4} justifyContent="center">
          {_carouselsMembers.map((member) => (
            <Grid item xs={12} sm={6} md={3} key={member.id}>
              <MemberCard member={member} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}

MemberCard.propTypes = {
  member: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    description: PropTypes.string
  }).isRequired
};

function MemberCard({ member }) {
  const { name, role, avatar, description } = member;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          position: "relative",
          width: "100%",
          height: 300,
          borderRadius: 2,
          overflow: "hidden"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${avatar})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            filter: "grayscale(100%) brightness(0.8)"
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            p: 2,
            width: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            color: "white"
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "regular", letterSpacing: 2 }}
          >
            {name}
          </Typography>
          <Box sx={{ width: 150, height: 2, bgcolor: "white", my: 0.5 }} />
          <Typography variant="caption" sx={{ letterSpacing: 2 }}>
            {role}
          </Typography>
          <Button sx={{ color: "#FFDC58" }} onClick={handleOpen}>
            READ MORE
          </Button>
        </Box>
      </Card>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
          {/* {name} */}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500]
            }}
          >
            <Icon icon="mdi:close" width={24} height={24} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" alignItems="center" p={2}>
            <Box
              component="img"
              src={avatar}
              alt={name}
              sx={{ width: 150, height: 150, borderRadius: "50%", mb: 2 }}
            />

            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: { xs: 24, lg: 28 },
                  fontWeight: 400,
                  fontFamily: '"Blair ITC", sans-serif'
                }}
              >
                {" "}
                {name}
              </Typography>
              <Divider sx={{ backgroundColor: "#060606", mb: 5 }} />
            </Box>

            {/* <Divider sx={{ width: "100%", my: 2 }} /> */}
            {Array.isArray(description) ? (
              <ul>
                {description.map((point, index) => (
                  <li key={index}>
                    <Typography variant="body2">{point}</Typography>
                  </li>
                ))}
              </ul>
            ) : (
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                {description}
              </Typography>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
