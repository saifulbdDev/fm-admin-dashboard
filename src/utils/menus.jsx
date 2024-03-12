import {
 
    HomeIcon,
    BuildingOfficeIcon,
    ExclamationCircleIcon,
    CurrencyDollarIcon, 
    ShoppingBagIcon,
    NewspaperIcon,
    StopCircleIcon,
    EnvelopeIcon,
    ChatBubbleBottomCenterTextIcon,
    UserGroupIcon,
    ShieldExclamationIcon,
    TruckIcon,
    QuestionMarkCircleIcon
  
  } from "@heroicons/react/24/solid";
  export const navs = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <HomeIcon className="w-5 h-5 " />
    },
    {
      name: "Companies",
      icon: <BuildingOfficeIcon className="w-5 h-5 " />,
      link: "/companies",
      menus: [
        {
          name: "Companies List",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        }
      ]
    },
    {
      name: "Sales",
      icon: <QuestionMarkCircleIcon className="w-5 h-5 " />,
      link: "/sales",
      menus: [
       
      ]
    },
    {
      name: "Salesman",
      icon: <BuildingOfficeIcon className="w-5 h-5 " />,
      link: "/salesman",
      menus: [
        
      ]
    },
    {
      name: "Products",
      icon: <ShoppingBagIcon className="w-5 h-5 " />,
      link: "/products",
      menus: [
        {
          name: "Products",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        },
        {
          name: "Spanish Products",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        }
      ]
    },
    {
      name: "Pages",
      icon: <NewspaperIcon className="w-5 h-5 " />,
      link: "/pages",
      menus: [
        {
          name: "Page Content",
          icon: <StopCircleIcon className="w-5 h-5 " />,
<<<<<<< HEAD
          link: "/admin/blog-list"
        },
        {
          name: "Spanish Page Content",
          icon: <StopCircleIcon className="w-5 h-5 " />,
          link: "/admin/blog-list"
        },
        {
          name: "Posts",
          icon: <StopCircleIcon className="w-5 h-5 " />,
          link: "/admin/blog-list"
=======
          link: "/admin/page-list"
        },
        {
          name: "Spanish Page Content",
          icon: <StopCircleIcon className="w-5 h-5 " />,
          link: "/admin/spanish-page-content"
        },
        {
          name: "Posts",
          icon: <StopCircleIcon className="w-5 h-5 " />,
          link: "/admin/blog-list"
        },
        {
          name: "Accordions",
          icon: <StopCircleIcon className="w-5 h-5 " />,
          link: "/admin/accordion-list"
        },
        {
          name: "Tags",
          icon: <StopCircleIcon className="w-5 h-5 " />,
          link: "/admin/tag-list"
        },
        {
          name: "Explore Filing Options",
          icon: <StopCircleIcon className="w-5 h-5 " />,
          link: "/admin/explore-list"
        },
        {
          name: "Author",
          icon: <StopCircleIcon className="w-5 h-5 " />,
          link: "/admin/author-list"
>>>>>>> 43b55cd49268d1466d79f45112d7f585f4da857f
        },
        {
          name: "Spanish Posts",
          icon: <StopCircleIcon className="w-5 h-5 " />,
<<<<<<< HEAD
          link: "/admin/blog-list"
=======
          link: "/admin/spanish-blog-list"
>>>>>>> 43b55cd49268d1466d79f45112d7f585f4da857f
        },
        {
          name: "Snippets",
          icon: <StopCircleIcon className="w-5 h-5 " />,
<<<<<<< HEAD
          link: "/admin/blog-list"
=======
          link: "/admin/snippet-list"
>>>>>>> 43b55cd49268d1466d79f45112d7f585f4da857f
        },
        {
          name: "Page Statics",
          icon: <StopCircleIcon className="w-5 h-5 " />,
<<<<<<< HEAD
          link: "/admin/blog-list"
=======
          link: "/admin/page-statics"
>>>>>>> 43b55cd49268d1466d79f45112d7f585f4da857f
        },
      ]
    },
    {
      name: "FMCSA",
      icon: <TruckIcon className="w-5 h-5 " />,
      link: "/companies",
      menus: [
        {
          name: "Carriers Scrapped",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        },
        {
          name: "Carriers CRM",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        },
        {
          name: "Marked Carriers",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        },
      ]
    },
    {
      name: "Marketing Campaing",
      icon: <BuildingOfficeIcon className="w-5 h-5 " />,
      link: "/companies",
      menus: [
        {
          name: "Emails",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        },
        {
          name: "SMS",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        },
        {
          name: "Email Logs",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        },
      ]
    },
    {
      name: "Mail Inbox",
      icon: <EnvelopeIcon className="w-5 h-5 " />,
      link: "/companies",
      menus: [
      ]
    },
    {
      name: "SMS Inbox",
      icon: <ChatBubbleBottomCenterTextIcon className="w-5 h-5 " />,
      link: "/companies",
      menus: [
        {
          name: "Sms Inbox",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        }
      ]
    },
    {
      name: "Send SMS Driver",
      icon: <CurrencyDollarIcon className="w-5 h-5 " />,
      link: "/companies",
      menus: [
      ]
    },
    {
      name: "Dot Service",
      icon: <BuildingOfficeIcon className="w-5 h-5 " />,
      link: "/companies",
      menus: [
        {
          name: "Edit Home",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        },
        {
          name: "Edit List",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        },
        {
          name: "Athurizated USDOT",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        }
      ]
    },
    {
      name: "Leads",
      icon: <BuildingOfficeIcon className="w-5 h-5 " />,
      link: "/companies",
      menus: [
        {
          name: "Contactt us",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        }
      ]
    },
    {
      name: "Users",
      icon: <UserGroupIcon className="w-5 h-5 " />,
      link: "/companies",
      menus: [
        {
          name: "Customers",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        },
        {
          name: "Staff",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        },
        {
          name: "Salesman",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        },
        {
          name: "Group of users",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        },
      ]
    },
    {
      name: "Drivers",
      icon: <UserGroupIcon className="w-5 h-5 " />,
      link: "/companies",
      menus: [
        {
          name: "Companies List",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        }
      ]
    },
    {
      name: "Commission Rate",
      icon: <BuildingOfficeIcon className="w-5 h-5 " />,
      link: "/companies",
      menus: [
      ]
    },
    {
      name: "Youtube Page Content",
      icon: <BuildingOfficeIcon className="w-5 h-5 " />,
      link: "/companies",
      menus: [
        {
          name: "Companies List",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        }
      ]
    },
   
    {
      name: "Security",
      icon: <ShieldExclamationIcon className="w-5 h-5 " />,
      link: "/companies",
      menus: [
        {
          name: "Log Entry",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        },
        {
          name: "Logged in right now",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        },
        {
          name: "Log-in history (Staff)",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        }
      ]
    },
    {
      name: "QUESTIONARES",
      icon: <QuestionMarkCircleIcon className="w-5 h-5 " />,
      link: "/companies",
      menus: [
        {
          name: "Questionares",
          icon: <ExclamationCircleIcon className="w-5 h-5 " />,
          link: "/companies"
        }
      ]
    },
    {
      name: "User Verification",
      icon: <UserGroupIcon className="w-5 h-5 " />,
      link: "/companies",
      menus: [
        
      ]
    },
  
  ];