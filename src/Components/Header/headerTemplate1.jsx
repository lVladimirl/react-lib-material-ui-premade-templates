import { Button, TextField, Paper } from "@mui/material";
import "./index.css";
export function HeaderTemplate1() {
  return (
    <header className="headerTemplate1">
      <img
        src="https://app.roll20.net/v2/images/roll20-logo.png?v=2"
        alt="roll20"
      ></img>
      <div className="headerTemplate1-pages">
        <ul>
          <li>
            <Button size="small" variant="contained">
             Pagina1
            </Button>
          </li>
          <li>
            <Button size="small" variant="contained">
              Pagin2
            </Button>
          </li>
          <li>
            <Button size="small" variant="contained">
              Pagina3
            </Button>
          </li>
          <li>
            <Button size="small" variant="contained">
              Pagina4
            </Button>
          </li>
        </ul>
      </div>

      <div className="headerTemplate1-searchBar">
        <Paper sx={{ margin: "10px 0px", height: "30px" }} elevation={24}>
          <TextField
            id="standard-basic"
            label="Pesquisa"
            variant="standard"
            size="small"
            sx={{ margin: "-10px 0px" }}
          />
        </Paper>
      </div>

      <div className="headerTemplate1-buttons">
        <Button variant="contained" size="small" sx={{height:"30px"}}>Button1</Button>
        <Button variant="contained" size="small" sx={{height:"30px"}}>Button2</Button>
      </div>
    </header>
  );
}
