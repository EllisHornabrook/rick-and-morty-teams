import { library } from "@fortawesome/fontawesome-svg-core";

import { faUser as faOpenUser } from "@fortawesome/free-regular-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
    faUserCheck,
    faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

export default library.add(
    faUserCheck,
    faOpenUser,
    faSignOutAlt,
    faGoogle
);
