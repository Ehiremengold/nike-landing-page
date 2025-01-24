import {
  Hero,
  PopularProducts,
  Services,
  Subscribe,
  SuperQuality,
  SpecialOffer,
  CustomerReviews,
  Footer,
} from "./sections";
import Nav from "./components/Nav";
import { motion } from "framer-motion";

const App = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  return (
    <main className="relative">
      <Nav />

      <motion.section
        className="xl:padding-l wild:padding-r padding-b"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Hero />
      </motion.section>

      <motion.section
        className="xl:padding-l wild:padding-r padding-b"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <PopularProducts />
      </motion.section>

      <motion.section
        className="xl:padding-l wild:padding-r padding-b"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SuperQuality />
      </motion.section>

      <motion.section
        className="padding-x py-10"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Services />
      </motion.section>

      <motion.section
        className="padding"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SpecialOffer />
      </motion.section>

      <motion.section
        className="padding bg-pale-blue"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <CustomerReviews />
      </motion.section>

      <motion.section
        className="padding-x sm:py-32 py-16 w-full"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Subscribe />
      </motion.section>

      <motion.section
        className="bg-black padding-x padding-t pb-8"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Footer />
      </motion.section>
    </main>
  );
};

export default App;
