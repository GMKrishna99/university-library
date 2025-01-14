import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { Button } from "@/components/ui/button";

const Home = async () => {
  return (
    <>
      <BookOverview />

      <BookList />

      <Button>hello world</Button>
    </>
  );
};

export default Home;
