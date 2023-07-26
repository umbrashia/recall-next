import Layout from "../../components/layout";
import { getActorFilms } from "../../lib/posts";

export default function actorFilms({ films }: any) {
  console.log(films);

  return (
    <Layout>
      {films.map((el: any) => {
        return (
          <>
            <ul>
              <li>title : {el.film.title}</li>
              <li>description : {el.film.description}</li>
              <li>release_year : {el.film.release_year}</li>
              <li>rating : {el.film.rating}</li>
            </ul>
            <br />
          </>
        );
      })}
    </Layout>
  );
}

export async function getServerSideProps({ params }: any) {
  console.log(params.actorID + "hello");

  const films = JSON.parse(JSON.stringify(await getActorFilms(params.actorID)));
  return {
    props: {
      films,
    },
  } as any;
}
