import {
  collection,
  getDocs,
  orderBy,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {useEffect, useState} from "react";
import {db} from "../Services/Firebase";
import Loading from "../../Pages/Loading";
import {styled} from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function Modules() {
  const [selection, setSelection] = useState("");
  const [modules, setModules] = useState<any[] | undefined>();
  const usersCollectionRef = collection(db, "modules");
  const q = query(usersCollectionRef, orderBy("order"));

  const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({theme}) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  useEffect(() => {
    const getModules = async () => {
      const data = await getDocs(q);
      setModules(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getModules();

    // eslint-disable-next-line
  }, [selection]);

  if (modules === undefined) return <Loading />;
  else {
    return (
      <div>
        <br />
        <h2>Modules</h2>
        <br />
        {/* /////////////////////////////////////////////  MODULE TABLE //////////////////////////////////////////////////////////// */}
        <TableContainer component={Paper}>
          <Table sx={{minWidth: 700}} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Module # </StyledTableCell>
                <StyledTableCell align="left">Module Name</StyledTableCell>
                <StyledTableCell align="left">Unit</StyledTableCell>
                <StyledTableCell align="left">Description</StyledTableCell>
                <StyledTableCell align="left">Level</StyledTableCell>
                <StyledTableCell align="left">Batch</StyledTableCell>
                <StyledTableCell align="left">Module Code</StyledTableCell>
                <StyledTableCell align="left">Update Module</StyledTableCell>
                <StyledTableCell align="left">Delete Module</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {modules.map((module) => (
                <StyledTableRow key={module.id}>
                  <StyledTableCell component="th" scope="module">
                    {module.order}
                  </StyledTableCell>
                  <StyledTableCell align="left">{module.title}</StyledTableCell>
                  <StyledTableCell align="left">
                    Unit {module.unit}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {module.description}
                  </StyledTableCell>
                  <StyledTableCell align="left">{module.level}</StyledTableCell>
                  <StyledTableCell align="left">{module.batch}</StyledTableCell>
                  <StyledTableCell align="left">
                    {module.modulecode}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Button color="secondary">Update</Button>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Button
                      color="error"
                      onClick={async () => {
                        try {
                          await deleteDoc(doc(db, "modules", module.id));
                        } catch (error) {
                        } finally {
                          //   following line added to update the page data realtime
                          setSelection(module.id);
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* /////////////////////////////////////////////  MODULE TABLE //////////////////////////////////////////////////////////// */}
        <br />
        <Button
          variant="contained"
          color="success"
          onClick={() => setSelection(selection + "Refresh")}
        >
          Refresh
        </Button>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <Button variant="contained" color="primary">
          Add New Module
        </Button>
        <br /> <br /> <br />
      </div>
    );
  }
}

export default Modules;
