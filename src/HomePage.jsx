function HomePage() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Banner */}
      <header style={{ padding: "20px", textAlign: "center" }}>
        <h1>Welcome to Our Online Store!</h1>
        <p>Exciting products coming soon. Stay tuned!</p>
      </header>

      {/* Featured Products Placeholder */}
      <section style={{ padding: "20px" }}>
        <h2>Featured Products</h2>
        <p>
          Our team is selecting the best products. This section will be updated
          once the product list is finalized.
        </p>
      </section>

      {/* Log In Placeholder */}
      <section style={{ padding: "20px" }}>
        <h2>Log In</h2>
        <p>Log in functionality will be available soon.</p>
      </section>
    </div>
  );
}
export default HomePage;
