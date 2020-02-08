import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import "./Footer.css";
export default class Footer extends React.Component {
  render() {
    return (
      <section id={"footer"}>
        <div className={"footermain container"}>
          <Grid stackable={true}>
            <Grid.Row columns={3}>
              <Grid.Column>
                <div className={"footer-holder"}>
                  <div className={"location-icon"}>
                    {" "}
                    <Icon size={"big"} name={"point"}></Icon>
                  </div>
                  <div className={"location-icon"}>
                    <Header className={"header-content"}>
                      Stock Express
                      <br />
                      346 Clarksville Rd
                      <br />
                      Princeton Junction, NJ 08550
                    </Header>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={"footer-holder"}>
                  <Header className={"header-content"}>
                    Office: (917)498-4648 <br />
                    Mail:{" "}
                    <a
                      className={"link-email"}
                      href={"mailto:rohandeshpande832@gmail.com"}
                    >
                      rohandeshpande832@gmail.com
                    </a>
                  </Header>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className={"footer-holder"}>
                  <Header className={"header-content"}>
                        © 2020 Stock Express. All Rights Reserved.
                        Developed by Rohan Deshpande
                      
                  </Header>
                  <div className={"social-hold"}>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      rel="noopener"
                      href={"https://www.linkedin.com/in/rohan-deshpande-994b23160/"}
                    >
                      <Icon color={"grey"} size="big" name={"linkedin"}></Icon>
                    </a>
                  </div>
                  <div className={"social-hold"}>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      rel="noopener"
                      href={"https://github.com/Rohan2002"}
                    >
                      <Icon color={"grey"} size="big" name={"github"}></Icon>
                    </a>
                  </div>
                  <div className={"social-hold"}>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      rel="noopener"
                      href={"mailto:rohandeshpande832@gmail.com"}
                    >
                      <Icon color={"grey"} size="big" name={"mail"}></Icon>
                    </a>
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </section>
    );
  }
}