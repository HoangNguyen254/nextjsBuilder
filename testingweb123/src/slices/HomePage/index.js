/**
 * @typedef {import("@prismicio/client").Content.HomePageSlice} HomePageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomePageSlice>} HomePageProps
 * @param {HomePageProps}
 */
const HomePage = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for home_page (variation: {slice.variation}) Slices
    </section>
  );
};

export default HomePage;
