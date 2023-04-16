import UserList from "./UserList";
import './Users.module.css'
import Card from "../UI/Card";

const Users = (props) => {
    return (
        <Card className="users">
            <UserList users={props.item}></UserList>
        </Card>
    );
}
export default Users;