import {
  Button,
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography
} from "@mui/material";

import { useInputValidation } from "6pp";
import { useState } from "react";
import { Sampleusers } from "../constants/sample";
import UserItem from "../shared/UserItem";

const Newgroup = () => {

  const groupName = useInputValidation("");

  const [members, setMembers] = useState(Sampleusers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (userId) => {


    
    const isAlreadySelected = selectedMembers.includes(userId);
    if (isAlreadySelected) {
      setSelectedMembers((prev) => prev.filter((id) => id !== userId));
    } else {
      setSelectedMembers((prev) => [...prev, userId]);
    }
  };

  console.log("selectedMembers", selectedMembers);

  const submitHandler = () => {
    console.log("submitHandler", groupName.value);
  }
  const closeHandler = () => {}
  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} >New Group</DialogTitle>
       <TextField value={groupName.value} onChange={groupName.changeHandler}
       label="Group Name" />
       <Typography variant="body1" fontWeight={600} textAlign={"center"}>
          Select Members
       </Typography>
       <Stack>
       {
              members.map((member)=>
                <UserItem key={member._id} user={member} handler={selectMemberHandler} isAdded={ selectedMembers.includes(member._id) } />
              ) 
        }
       </Stack>
       <Stack direction={"row"} justifyContent={"space-between"} mt={2}>
         <Button variant="outlined" color="error" size="large">
           Cancel
         </Button>
         <Button variant="contained" color="primary" size="large" onClick={submitHandler}>
           Create Group
         </Button>

</Stack>
      </Stack>
    </Dialog>
  )
}

export default Newgroup