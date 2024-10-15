export const App = () => {
  return;
  <browserRouter>
    <Routes>
      <Route path="/" element={<div>Home page</div>} />
      <Route path="/blogs" element={<div>All blogs page</div>} />
      <Route path="/blogs/:id" element={<div>Single Blog Pages</div>} />
      <Route path="/contact us" element={<div>Contact Us</div>} />
      <Route path="/404" element={<div>Not fount fage</div>} />
    </Routes>
  </browserRouter>;
};
