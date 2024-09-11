import userDefinedFields from "./userDefinedFields";

const config = {
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
        routing: {
            prefixDefaultLocale: false
        }
    },
    ui: {
        map: {
            tinaLabel: "Map"
        },
        home: {
            tinaLabel: "Home"
        },
        about: {
            tinaLabel: "About"
        },
        paths: {
            tinaLabel: "Paths"
        },
        posts: {
            tinaLabel: "Posts"
        },
        aboutProject: {
            tinaLabel: "About the Project"
        },
        startTour: {
            tinaLabel: "Start the Tour"
        },
        readMore: {
            tinaLabel: "Read More"
        },
        footerText: {
            tinaLabel: "(footer text)"
        },
        footerCopyright: {
            tinaLabel: "(footer copyright)"
        },
        coreDataLogin: {
            tinaLabel: "Log in to Core Data"
        },
        tinaLogin: {
            tinaLabel: "Log in to Tina CMS"
        },
        // add in non-user-defined core data fields here
        title: {
            tinaLabel: "Name"
        },
        root: {
            tinaLabel: "Root"
        },
        owner_project: {
            tinaLabel: "Owner Project"
        },
        all_projects: {
            tinaLabel: "All Projects"
        },
        owner_project_id: {
            tinaLabel: "Owner Project -> ID"
        },
        all_projects_id: {
            tinaLabel: "All Projects -> ID"
        },
        owner_project_name: {
            tinaLabel: "Owner Project -> Name"
        },
        all_projects_name: {
            tinaLabel: "All Projects -> Name"
        },
        event_range: {
            tinaLabel: "Event Range"
        },
        ...userDefinedFields
    },
    featuredModel: {
        uuid: '40de3d57-c3d0-4152-ab61-f970c0ada2a0',
        labelField: '40de3d57-c3d0-4152-ab61-f970c0ada2a0.name.value'
    }
};

export default config;