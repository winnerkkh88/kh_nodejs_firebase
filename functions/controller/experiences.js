exports.getExperiences = (req, res) => {
  const experiencesInfo = [
    {
      company: "LG FASHION",
      projectName:
        'LF Internal "Groupware", "Logistics system" and "POS(Point of Sales)" System Maintenance',
      period: "November 2018 - September 2019",
      projectSummary:
        "Maintaining Groupware website, the Logistics Integration System and POS system with developing new features that were requested by customers (LG Fashion Employees)",
      frameworks: ["Spring"],
      languages: ["JAVA", "JSP", "JavaScript", "CSS"],
      dbms: ["Oracle SQL"],
      tools: ["Eclipse (IDE)", "SQL Developer"],
      libraries: ["Mybatis", "jQuery", "SVN"],
    },
    {
      company: "SAMSUNG SDS",
      projectName:
        'Developing the internal use of the "EMS (Equipment Management System)" website',
      period: "July 2018 - October 2018",
      projectSummary:
        "Developing and building a new EMS (Equipment Management System) webpage that tracks the history of the assembled parts of the Samsung Semi-Conductor",
      frameworks: ["Anyframe Enterprise"],
      languages: ["JAVA", "HTML5", "JavaScript", "CSS"],
      dbms: ["Oracle SQL"],
      tools: ["Eclipse (IDE)", "SQL Developer"],
      libraries: ["Mybatis", "jQuery", "JQ Widget", "Maven", "SVN"],
    },
    {
      company: "POSCO ICT",
      projectName: 'Updating the "Information & Sharing Portal" Website',
      period: "March 2018 - July 2018",
      projectSummary:
        "Worked on the process of updating Posco's portal site and developed customers’ (POSCO ICT Employees) requests while maintaining its website",
      frameworks: ["Struts2"],
      languages: ["JAVA", "JSP", "JavaScript", "CSS"],
      dbms: ["Oracle SQL"],
      tools: ["Eclipse (IDE)", "SQL Developer"],
      libraries: ["Mybatis", "jQuery"],
    },
  ];

  res.send(experiencesInfo);
};
