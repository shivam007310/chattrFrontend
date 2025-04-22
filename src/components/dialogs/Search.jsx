import { useInputValidation } from "6pp";
import {
  Dialog,
  Stack,
  DialogTitle,
  Input,
  TextField,
  InputAdornment,
  List,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
import { useState } from "react";
import { Sampleusers } from "../constants/sample";


const Search = () => {



  const search = useInputValidation("");

  const isLoadingSendfriendRequest = false;
  const [users, setUsers] = useState(Sampleusers);
  const addFriendHandler = (userId) => {
    console.log("addFriendHandler", userId);
  };


  return (
    <Dialog open>
      <Stack padding={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          variant="outlined"
          value={search.value}
          onChange={search.changeHandler}
          size="small"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />

          <List>
            {
              users.map((user)=>
                
                <UserItem key={user._id} user={user} handler={addFriendHandler} handlerIsLoading={isLoadingSendfriendRequest} />
                
              )
            }
          </List>

      </Stack>
    </Dialog>
  );
};

export default Search;
