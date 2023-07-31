import {collection, getDocs, query, deleteDoc, doc} from "firebase/firestore";
import {useContext, useEffect, useState} from "react";
import {db} from "../../Services/Firebase";
import Loading from "../../../Pages/Loading";
import {styled} from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {UserContext} from "./UserContext";

function Users() {
  const {setTitle, setUpdate} = useContext<any>(UserContext);
  const [selection, setSelection] = useState("");
  const [users, setUsers] = useState<any[] | undefined>();
  const usersCollectionRef = collection(db, "users");
  const q = query(usersCollectionRef);

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
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getModules();

    // eslint-disable-next-line
  }, [selection]);

  var i = 1;

  if (users === undefined) return <Loading />;
  else {
    return (
      <div>
        <br />
        <h2>Users</h2>
        <br />
        {/* /////////////////////////////////////////////  MODULE TABLE //////////////////////////////////////////////////////////// */}
        <TableContainer component={Paper}>
          <Table sx={{minWidth: 700}} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell> # </StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>

                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Role</StyledTableCell>
                <StyledTableCell align="left">Module</StyledTableCell>
                <StyledTableCell align="left">Module</StyledTableCell>
                <StyledTableCell align="left">Module</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <StyledTableRow key={module.id}>
                  <StyledTableCell component="th" scope="module">
                    {i++}
                  </StyledTableCell>
                  <StyledTableCell align="left">{user.name}</StyledTableCell>
                  <StyledTableCell component="th" scope="module">
                    {user.email}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    Access {user.role}
                  </StyledTableCell>

                  <StyledTableCell align="left">
                    <Button
                      color="success"
                      onClick={() => {
                        setTitle("View User");
                        setUpdate(user.id);
                      }}
                    >
                      View
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Button
                      color="secondary"
                      onClick={() => {
                        setTitle("Update User");
                        setUpdate(user.id);
                      }}
                    >
                      Update
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Button
                      color="error"
                      onClick={async () => {
                        try {
                          await deleteDoc(doc(db, "users", user.id));
                        } catch (error) {
                        } finally {
                          //   following line added to update the page data realtime
                          setSelection(user.id);
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

        <Button
          fullWidth
          variant="contained"
          color="success"
          onClick={() => setSelection(selection + "Refresh")}
          sx={{mt: 3, mb: 0}}
        >
          Refresh
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setTitle("Add User")}
          fullWidth
          sx={{mt: 3, mb: 2}}
        >
          Add New User
        </Button>
      </div>
    );
  }
}

export default Users;
