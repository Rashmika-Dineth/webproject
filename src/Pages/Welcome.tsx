import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Welcome() {
  return (
    <div style={{border: 50}}>
      <h1>WELCOME! </h1>
      <br />
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-start"
      >
        <Grid item xs={5}>
          <Typography align="justify">
            Welcome to our cutting-edge Learning Management System, envisioned
            and developed by Software Engineer Rashmika! We are delighted to
            present an innovative platform that redefines the landscape of
            online learning.
          </Typography>{" "}
          <br />
          <Typography align="justify">
            With a passion for education and a vision for seamless knowledge
            dissemination, our LMS brings together learners and educators on a
            dynamic virtual stage. As the architect behind this transformative
            endeavor, Rashmika has meticulously designed a user-centric
            interface that caters to learners of all ages and backgrounds. With
            a plethora of features and advantages, our LMS empowers you to
            embark on an educational journey like never before. Our platform is
            designed with the learner's needs at the forefront, providing a
            personalized and engaging learning experience for users of all ages
            and backgrounds.
          </Typography>{" "}
          <br />
          <Typography align="justify">
            Embrace the flexibility to learn from the comfort of your home or on
            the go, transcending geographical boundaries and time constraints.
            Whether you're an eager student or a dedicated educator, our LMS
            offers a dynamic space to thrive and excel.
          </Typography>{" "}
          <br />
          <Typography align="justify">
            Join us as we unlock the true potential of digital learning,
            offering flexibility, collaboration, and personalized growth
            opportunities for each and every user. Together, let's embrace the
            boundless possibilities of education and embark on a journey of
            lifelong learning!
          </Typography>{" "}
          <br />
          <Typography align="justify">
            Welcome to a world of boundless knowledge and unparalleled growth.
          </Typography>{" "}
          <br />
          <Typography align="justify">
            The path to success starts here, with Rashmika's LMS.
          </Typography>{" "}
          <br />
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://www.pushengage.com/wp-content/uploads/2022/02/Best-Website-Welcome-Message-Examples.png"
            alt="new"
            width={window.innerWidth * 0.4}
            height={window.innerWidth * 0.4}
          />
        </Grid>
        <Grid item xs={12}>
          <h3>Happy learning!</h3>
        </Grid>
      </Grid>
    </div>
  );
}

export default Welcome;
