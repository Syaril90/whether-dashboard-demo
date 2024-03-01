import React from "react";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
  Typography,
} from "@mui/material";
import Header from "./Header";
import WhetherDataTable from "./WhetherDataTable";

const theme = createTheme({
  // Theme settings
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize CSS */}
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Box sx={{ margin: "20px" }}>
          {" "}
          {/* Use Box with sx prop for styling */}
          <main>
            <Box sx={{ margin: "20px" }}>
              <Typography>Dashboard</Typography>
            </Box>
            <WhetherDataTable />
          </main>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
