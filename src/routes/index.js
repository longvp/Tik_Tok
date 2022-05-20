// Layouts
import { HeaderOnly } from "~/component/Layout"

// Pages
import Following from "~/pages/Following"
import Home from "~/pages/Home"
import Profile from "~/pages/Profile"
import Search from "~/pages/Search"
import Upload from "~/pages/Upload"

//  public routes
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload, layout: HeaderOnly},
    {path: '/search', component: Search, layout: null}
]

// private routes
const privateRoutes = []

export {publicRoutes, privateRoutes}