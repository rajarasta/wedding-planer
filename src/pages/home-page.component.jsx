import React from "react";

import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import Button from "../components/CustomButtons/Button.js";
import CardAvatar from "../components/Card/CardAvatar"

import { makeStyles } from "@material-ui/core/styles";
import Home from "@material-ui/icons/Home";
import Icon from "@material-ui/core/Icon";

import avatar from "../assets/pictures/mirna_i_antonio.jpg";

import {
    cardTitle,
    roseColor
} from "../assets/jss/material-dashboard-pro-react.js";

const styles = {
    cardTitle,
    cardTitleWhite: {
        ...cardTitle,
        color: "#FFFFFF",
        marginTop: "0"
    },
    cardCategoryWhite: {
        margin: "0",
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: ".875rem"
    },
    cardCategory: {
        color: "#999999",
        marginTop: "10px"
    },
    icon: {
        color: "#333333",
        margin: "10px auto 0",
        width: "130px",
        height: "130px",
        border: "1px solid #E5E5E5",
        borderRadius: "50%",
        lineHeight: "174px",
        "& svg": {
            width: "55px",
            height: "55px"
        },
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            width: "55px",
            fontSize: "55px"
        }
    },
    iconRose: {
        color: roseColor
    },
    marginTop30: {
        marginTop: "30px"
    },
    testimonialIcon: {
        marginTop: "30px",
        "& svg": {
            width: "40px",
            height: "40px"
        }
    },
    cardTestimonialDescription: {
        fontStyle: "italic",
        color: "#999999"
    }
};

const useStyles = makeStyles(styles);

const HomePage = () => {

    const classes = useStyles();

    return (
        <div className='home-page'>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} lg={6}>
                            <Card profile>
                                <CardBody profile>
                                    <h6 className={classes.cardCategory}>MIRNA I ANTONIO</h6>

                                    <h3 className={`${classes.cardTitle} ${classes.marginTop30}`}>
                                        WEDDING
                                    </h3>
                                    <CardAvatar >
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <img src={avatar} alt="..." style={{height:200} } />
                                        </a>
                                    </CardAvatar>

                                    <p className={classes.cardDescription}>
                                        Manage your wedding.
                                    </p>
                                    <Button round color="rose">
                                        HOME
                                    </Button>
                                </CardBody>
                            </Card>
                        </GridItem>


                    </GridContainer>
                </GridItem>

            </GridContainer>
        </div>
    )
}

export default HomePage;