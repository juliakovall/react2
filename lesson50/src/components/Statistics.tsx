type StatisticsProps = {
  count: number;
  totalPrice: number;
  averageRating: number;
};

function Statistics({ count, totalPrice, averageRating }: StatisticsProps) {
  console.log("Render Statistics");

  return (
    <section className="statistics">
      <p>Found products: {count}</p>
      <p>Total price: ${totalPrice}</p>
      <p>Average rating: {averageRating}</p>
    </section>
  );
}

export default Statistics;
