import { styled } from "@material-ui/core/styles";
const Blog = () => (
  <>
    <Section>
      <h1>Em breve !</h1>
      <video autoPlay loop className="bg_video">
        <source src="video/backVideo.mp4" type="video/mp4" />
      </video>
    </Section>
  </>
);

export default Blog;

const Section = styled("section")`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.text.primary};
  h1 {
    font-size: 2em;
    font-weight: 300;
    text-transform: uppercase;
  }
`;
