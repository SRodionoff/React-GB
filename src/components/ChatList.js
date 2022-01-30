import { List } from "@material-ui/core";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { Chat } from "./Chat";

export const ChatList = ({ list }) => {
    return (
        <List>
            {list.map((item) => (
                <Chat key={item.id} {...item} />
            ))}
            <Chat id="1" name="incorrect" />
        </List>
    );
};

ChatList.propTypes = {
    list: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            name: propTypes.string
        })
    )
};