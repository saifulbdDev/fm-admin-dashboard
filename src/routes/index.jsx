import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import AuthLayout from "@/components/AuthLayout";
import Page404 from "@/pages/Page404";
import Login from "@/pages/Login";
import Forgetpassword from "@/pages/Forgetpassword";
import PathConstants from "./pathConstants";
const BlogAdd = React.lazy(() => import("@/pages/BlogAdd"));
const BlogEdit = React.lazy(() => import("@/pages/BlogEdit"));
const BlogDetails = React.lazy(() => import("@/pages/BlogDetails"));
const BlogLists = React.lazy(() => import("@/pages/BlogLists"));
const Dashboard = React.lazy(() => import("@/pages/Dashboard"));
const Email_inbox = React.lazy(() => import("@/pages/email_inbox"));
const Verifylist = React.lazy(() => import("@/pages/Verifylist"));
const Verifydetails = React.lazy(() => import("@/pages/Verifydetails"));
<<<<<<< HEAD
=======
const AccordionList = React.lazy(() => import("@/pages/AccordionList"));
const AccordionAdd = React.lazy(() => import("@/pages/AccordionAdd"));
const AccordionUpdate = React.lazy(() => import("@/pages/AccordionUpdate"));
const TagsList = React.lazy(() => import("@/pages/TagsList"));
const TagAdd = React.lazy(() => import("@/pages/TagAdd"));
const TagUpdate = React.lazy(() => import("@/pages/TagUpdate"));
const ExploresList = React.lazy(() => import("@/pages/ExploreList"));
const ExploreAdd = React.lazy(() => import("@/pages/ExploreAdd"));
const ExploreUpdate = React.lazy(() => import("@/pages/ExploreUpdate"));
const AuthorsList = React.lazy(() => import("@/pages/AuthorList"));
const AuthorAdd = React.lazy(() => import("@/pages/AuthorAdd"));
const AuthorUpdate = React.lazy(() => import("@/pages/AuthorUpdate"));
const PageList = React.lazy(() => import("@/pages/PageLists"));
const PageAdd = React.lazy(() => import("@/pages/PageAdd"));
const PageUpdate = React.lazy(() => import("@/pages/PageUpdate"));
const PageDetails = React.lazy(() => import("@/pages/PageDetails"));
const SnippetAdd = React.lazy(() => import("@/pages/SnippetAdd"));
const SnippetUpdate = React.lazy(() => import("@/pages/SnippetUpdate"));
const SnippetList = React.lazy(() => import("@/pages/SnippetList"));
>>>>>>> 43b55cd49268d1466d79f45112d7f585f4da857f
const routes = [
  { path: PathConstants.HOME, element: <Dashboard /> },
  { path: PathConstants.BLOGLIST, element: <BlogLists /> },
  { path: PathConstants.BLOGADD, element: <BlogAdd /> },
  { path: PathConstants.BLOGEDIT, element: <BlogEdit /> },
  { path: PathConstants.BLOGDETAILS, element: <BlogDetails /> },
  { path: PathConstants.ACCORDIONLIST, element: <AccordionList /> },
  { path: PathConstants.ACCORDIONADD, element: <AccordionAdd /> },
  { path: PathConstants.ACCORDIONUPDATE, element: <AccordionUpdate /> },
  { path: PathConstants.TAGLIST, element: <TagsList /> },
  { path: PathConstants.TAGADD, element: <TagAdd /> },
  { path: PathConstants.TAGUPDATE, element: <TagUpdate /> },
  { path: PathConstants.EXPLORELIST, element: <ExploresList /> },
  { path: PathConstants.EXPLOREADD, element: <ExploreAdd /> },
  { path: PathConstants.EXPLOREUPDATE, element: <ExploreUpdate /> },
  { path: PathConstants.AUTHORLIST, element: <AuthorsList /> },
  { path: PathConstants.AUTHORADD, element: <AuthorAdd /> },
  { path: PathConstants.AUTHORUPDATE, element: <AuthorUpdate /> },
  { path: PathConstants.PAGELIST, element: <PageList /> },
  { path: PathConstants.PAGEADD, element: <PageAdd /> },
  { path: PathConstants.PAGEUPDATE, element: <PageUpdate /> },
  { path: PathConstants.PAGEDETAILS, element: <PageDetails /> },
  { path: PathConstants.SNIPPETLIST, element: <SnippetList /> },
  { path: PathConstants.SNIPPETADD, element: <SnippetAdd /> },
  { path: PathConstants.SNIPPETUPDATE, element: <SnippetUpdate /> },

  { path: "/admin/email-inbox", element: <Email_inbox /> },
  { path: "/admin/verifylist", element: <Verifylist /> },
  { path: "/admin/verifydetails", element: <Verifydetails /> }
];

export const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Layout />,
    errorElement: <Page404 />,
    children:routes
  },
  {
    path: "/",

    element: <AuthLayout />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <Navigate to="/login" replace />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  },
  {
    path: "/",

    element: <AuthLayout />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <Navigate to="/forget" replace />
      },
      {
        path: "/forget",
        element: <Forgetpassword />
      }
    ]
  }
]);
