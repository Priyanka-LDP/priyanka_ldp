import Grid from '@mui/material/Grid';
import BookCard from "../../components/molecules/BookCard";
  
  const CardPage = (props: any) => {
    return (
      <Grid container spacing={5}>
        {props.books        
          .map((book: any, index: any) => (
            <BookCard
              key={index}
              cardData={{
                ...book,
                onClick: () => {
                  props.setBooks((prev: any) =>
                    prev.map((data: any) => {
                      if (data.id == book.id) {
                        return {
                          ...data,
                          finish: !data.finish,
                        };
                      }
                      return data;
                    })
                  );
                },
              }}
            />
          ))}
      </Grid>
    );
  };
  
  export default CardPage;
  