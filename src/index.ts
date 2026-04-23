import Handlebars from "handlebars";
import chatItemTpl from "./components/chat-item/chat-item.hbs?raw";
import sidebarTpl from "./layouts/sidebar/sidebar.hbs?raw";
import { chats } from "./mocks/chats.js";

import gtHelper from "./helpers/gt.js";
import ltHelper from "./helpers/lt.js";
import subtractHelper from "./helpers/subtract.js";

Handlebars.registerPartial("chat-item", chatItemTpl);

Handlebars.registerHelper("gt", gtHelper);
Handlebars.registerHelper("lt", ltHelper);
Handlebars.registerHelper("subtract", subtractHelper);

document.body.innerHTML = Handlebars.compile(sidebarTpl)({ chats });