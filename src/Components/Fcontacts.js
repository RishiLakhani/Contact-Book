import { Card, Grid, Typography } from "@mui/material";
import React from "react";

const Fcontacts = (props) => {
  const fcontacts = props.value;
  fcontacts.sort(function(a, b) {
    var nameA = a['first_name'] + ' ' + a['last_name']
    var nameB = b['first_name'] + ' ' + b['last_name']
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return (
    <div>
      <h2 className="Header">Favourites</h2>
      <div className="Favs">
        {fcontacts.length ? (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {fcontacts.map((contact) => (
              <Grid item xs={2} sm={3} md={4} key={contact.id}>
                <Card style={{ padding: "20px", position: "relative", height: "250px" }}>
                  <button
                    onClick={() => props.button(contact["id"])}
                    style={{ position: "absolute", top: "5px", right: "5px", border: '0px', background: '#FFFFFF' }}
                  >
                    <i className="fas fa-heart" style={{ fontSize: '30px' }} ></i>
                  </button>
                  <img
                    src={contact["avatar"]}
                    alt="Failed to load"
                    height="100px"
                  />
                  <Typography variant="h4" fontSize='30px'>
                    {contact["first_name"]} {contact["last_name"]}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ textAlign: "left", marginTop: "10px" }}
                  >
                    <b>Phone Number:</b> {contact["phone_number"]}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ textAlign: "left", marginTop: "10px" }}
                  >
                    <b>Email Address:</b> {contact["email"]}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ textAlign: "left", marginTop: "10px" }}
                  >
                    <b>University:</b> {contact["university"]}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <ul style={{ fontSize: '20px' }}>No Favourites</ul>
        )}
      </div>
    </div>
  );
};

export default Fcontacts;
