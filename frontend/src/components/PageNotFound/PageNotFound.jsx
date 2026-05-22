import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import {  Rocket } from "lucide-react";

const PageNotFound = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Box
      sx={{
        height: "100svh", // Strict height to fit viewport
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0f172a",
        color: "white",
        overflow: "hidden", // Prevent any scrolling
        position: "relative",
      }}
    >
      {/* Dynamic CSS Background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(circle at 15% 15%, rgba(139, 92, 246, 0.15) 0%, transparent 40%), radial-gradient(circle at 85% 85%, rgba(99, 102, 241, 0.15) 0%, transparent 40%)",
        }}
      />

      {/* Animated Orbit Rings */}
      {[1, 2, 3].map((i) => (
        <Box
          key={i}
          component={motion.div}
          animate={{ rotate: 360 }}
          style={{ x: "-50%", y: "-50%" }} // Keep centered during rotation
          transition={{
            duration: 30 + i * 15,
            repeat: Infinity,
            ease: "linear",
          }}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: `${300 + i * 150}px`, // Reduced size to fit better
            height: `${300 + i * 150}px`,
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: "50%",
            zIndex: 0,
            pointerEvents: "none",
            "&::after": {
              content: '""',
              position: "absolute",
              top: "50%",
              left: "-4px",
              width: "8px",
              height: "8px",
              background: "rgba(255, 255, 255, 0.2)",
              borderRadius: "50%",
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            },
          }}
        />
      ))}

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center py-10"
        >
          {/* Main 404 Display with Premium Typography & Effects */}
          <motion.div variants={itemVariants} className="relative mb-8">
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "8rem", sm: "12rem", md: "16rem" },
                fontWeight: 900,
                fontFamily: "Outfit",
                lineHeight: 0.9,
                background:
                  "linear-gradient(135deg, #fff 0%, #8B5CF6 50%, #6366F1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 20px 50px rgba(139, 92, 246, 0.4))",
                letterSpacing: -10,
                mb: 2,
              }}
            >
              404
            </Typography>

            {/* Animated SVG Icon instead of image */}
            <motion.div
              animate={{
                y: [0, -30, 0],
                rotate: [45, 60, 45],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:-top-16 md:-right-16"
            >
              <Rocket
                size={80}
                className="text-violet-400 opacity-80"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.6))",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <Box className="space-y-6 max-w-xl">
            <motion.div variants={itemVariants}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "2rem", md: "4rem" },
                  fontWeight: 900,
                  fontFamily: "Outfit",
                  color: "white",
                  lineHeight: 1.1,
                  mb: 1,
                }}
              >
                {/* You've Drifted Away */}
                Page Not Found
              </Typography>
            </motion.div>
          </Box>
        </motion.div>
      </Container>

      {/* Glassmorphism Floating Elements (Pure CSS Design) */}
      <Box
        component={motion.div}
        animate={{
          y: [0, 50, 0],
          rotate: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: "20%",
          right: "15%",
          width: "140px",
          height: "140px",
          background: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "32px",
          display: { xs: "none", lg: "block" },
        }}
      />

      <Box
        component={motion.div}
        animate={{
          y: [0, -60, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "15%",
          width: "100px",
          height: "100px",
          background:
            "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.1))",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "28px",
          display: { xs: "none", lg: "block" },
        }}
      />
    </Box>
  );
};

export default PageNotFound;
