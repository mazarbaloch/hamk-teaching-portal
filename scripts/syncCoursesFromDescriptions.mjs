import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const sourcePath = path.join(projectRoot, 'courses-descriptions.md');
const docsRoot = path.join(projectRoot, 'docs');
const coursesDataPath = path.join(projectRoot, 'src', 'data', 'courses.ts');

const GENERATED_PAGE_COUNT = 8;

const courseDefinitions = [
  {
    sourceTitle: 'M3C3 Machine Learning Infrastructure Management 5 ECTs',
    title: 'Machine Learning Infrastructure Management',
    level: 'masters',
    code: 'M3C3',
    credits: '5 ECTS',
    status: 'active',
    featured: true,
    shortDescription:
      'Cloud-based ML infrastructure, infrastructure-as-code, orchestration, and serving optimization for production machine learning systems.',
    deliveryMode: 'In-class lectures, practical tasks, and teamwork',
    tags: ['Cloud', 'IaC', 'MLOps'],
    summary:
      'This course is part of the Productization of Machine Learning Models module. It builds practical capability in cloud-based machine learning infrastructure, with a strong emphasis on infrastructure-as-code, deployment, orchestration, and the operational performance of serving systems.',
    scheduleSource:
      'Specific dates and locations are published in the Lukkarit calendar, and the detailed progression plan is maintained in Moodle.',
    schedulePlan: [
      'Infrastructure setup and automation for machine learning pipelines',
      'Model deployment and orchestration workflows',
      'Performance optimization, throughput, latency, and cost management',
    ],
    coreThemes: [
      'cloud solutions for machine learning pipelines',
      'infrastructure-as-code for defining, managing, and provisioning environments',
      'virtualization and containerization for deployment and serving',
      'workflow orchestration inside machine learning pipelines',
      'cost, throughput, and latency optimization for inference services',
    ],
    learningOutcomes: [
      'work with a given cloud solution while applying infrastructure-as-code to define, manage, and provision infrastructure for machine learning pipelines',
      'work with virtualization and containerization technologies used during model deployment and serving',
      'understand and use tooling for workflow orchestration in machine learning pipelines',
      'optimize the cost, throughput, and latency of model inference in serving systems',
    ],
    practicalWork: [
      'set up and automate infrastructure for machine learning pipelines',
      'package and deploy services with virtualization and containerization technologies',
      'connect orchestration tooling to repeatable machine learning workflows',
      'evaluate performance tradeoffs in production-style serving scenarios',
    ],
    assignmentWork: [
      'individual tasks tied to the course themes',
      'teamwork-based practical tasks that reinforce the lecture material',
      'hands-on infrastructure work that connects theory to deployment and serving',
    ],
    assessmentSummary: [
      'The course is assessed on a scale of 0-5.',
      'Assessment is based on individual tasks and teamwork.',
      'Detailed grading guidelines are published in Moodle.',
      'Previously acquired skills can be recognized through the AHOT process.',
    ],
    learningEnvironments: [
      'in-class lectures with theory delivered alongside practical work',
      'team-based practical tasks',
      'Moodle for the course progression plan, materials, and grading guidance',
      'Lukkarit for dates and locations',
    ],
    materials: [
      'All learning materials and relevant literature are available in Moodle at learn.hamk.fi.',
      'The course progression plan in Moodle is the main reference for the teaching sequence.',
    ],
  },
  {
    sourceTitle: 'M2C2 Data Engineering 5 ECTs',
    title: 'Data Engineering',
    level: 'masters',
    code: 'M2C2',
    credits: '5 ECTS',
    status: 'active',
    featured: true,
    shortDescription:
      'Cloud-based data engineering with pipelines, ETL, storage design, governance, and big data processing for machine learning contexts.',
    deliveryMode: 'In-class lectures, practical tasks, and teamwork',
    tags: ['Data Engineering', 'ETL', 'Cloud'],
    summary:
      'This course belongs to the Foundations of Machine Learning module. It develops practical proficiency in cloud-based data engineering, including pipeline design, ETL work, storage choices, governance, and large-scale processing.',
    scheduleSource:
      'Specific dates and locations are published in the Lukkarit calendar, and the detailed progression plan is maintained in Moodle.',
    schedulePlan: [
      'Data acquisition and storage',
      'Data processing and transformation',
      'Data governance and optimization',
    ],
    coreThemes: [
      'cloud computing for data engineering tasks',
      'data pipelines, ETL processes, and data warehousing principles',
      'storage and management options such as NoSQL databases and data lakes',
      'data quality, governance, consistency, and security',
      'big data technologies for processing and analysis',
    ],
    learningOutcomes: [
      'utilize cloud computing in data engineering tasks',
      'work with fundamental concepts and principles of data engineering, including data pipelines, ETL processes, and data warehousing',
      'choose appropriate data storage and management solutions based on specific use cases, including NoSQL databases and data lakes',
      'implement strategies for data quality and governance to ensure data accuracy, consistency, and security',
      'gain hands-on experience with big data technologies to process and analyze large datasets',
    ],
    practicalWork: [
      'build and refine pipeline and ETL workflows',
      'compare storage options for different use cases',
      'apply governance and quality controls to engineering tasks',
      'work with big data technologies on realistic datasets',
    ],
    assignmentWork: [
      'individual tasks aligned with the three course phases',
      'teamwork-based practical tasks that connect theory to implementation',
      'hands-on data engineering exercises delivered through the course workspace',
    ],
    assessmentSummary: [
      'The course is assessed on a scale of 0-5.',
      'Assessment is based on individual tasks and teamwork.',
      'Detailed grading guidelines are published in Moodle.',
      'Previously acquired skills can be recognized through the AHOT process.',
    ],
    learningEnvironments: [
      'in-class lectures with supporting theory',
      'team-based practical tasks',
      'Moodle for the progression plan, materials, and grading guidance',
      'Lukkarit for dates and locations',
    ],
    materials: [
      'All learning materials and relevant literature are available in Moodle at learn.hamk.fi.',
      'The course progression plan in Moodle explains the planned sequence of topics and activities.',
    ],
  },
  {
    sourceTitle: 'M4C3: Applied Natural Language Processing, 5 ECTS',
    title: 'Applied Natural Language Processing',
    level: 'masters',
    code: 'M4C3',
    credits: '5 ECTS',
    status: 'active',
    featured: true,
    shortDescription:
      'Practical natural language processing with preprocessing, embeddings, deep learning models, translation, dialogue systems, and modern language model architectures.',
    deliveryMode: 'Implementation-focused lectures and model development sessions',
    tags: ['NLP', 'Embeddings', 'LLMs'],
    summary:
      'This course focuses on the practical workflow of natural language processing, moving from text preprocessing and vector representations to deep learning models, translation, dialogue systems, and modern language model architectures.',
    schedulePlan: [
      'Text preprocessing and corpus preparation',
      'Word embeddings and vector representations',
      'Deep learning models for language understanding',
      'Machine translation and dialogue agents',
      'Modern language model architectures for advanced NLP tasks',
    ],
    coreThemes: [
      'text preprocessing for raw language data',
      'word embeddings as vector representations of text',
      'deep learning models for language understanding tasks',
      'neural models for machine translation and dialogue agents',
      'modern language model architectures for improved language understanding and processing',
    ],
    learningOutcomes: [
      'perform text preprocessing to prepare raw text data for analysis',
      'understand and utilize word embeddings to represent text data in vector form',
      'implement, train, and debug deep learning models for a range of language understanding tasks',
      'develop and extend neural network models for machine translation, dialogue agents, and other NLP applications',
      'apply modern language model architectures to enhance language understanding and processing capabilities',
    ],
    practicalWork: [
      'prepare text data for downstream language tasks',
      'implement and train embedding-based and neural NLP models',
      'debug model behavior across language understanding tasks',
      'extend model pipelines toward translation and dialogue applications',
    ],
    assignmentWork: [
      'implementation work around preprocessing, embeddings, and model training',
      'practical model development for translation, dialogue, or related NLP applications',
      'debugging and evaluation tasks connected to modern NLP architectures',
    ],
    assessmentSummary: [
      'The source description emphasizes learning goals and implementation capability.',
      'A separate grading breakdown is not included in the source description and should be published in the course workspace when available.',
    ],
    learningEnvironments: [
      'lecture-led exploration of NLP workflows',
      'hands-on implementation and debugging sessions',
      'model development activities focused on practical language applications',
    ],
    materials: [
      'The source description focuses on learning goals rather than a dedicated reading list.',
      'Lecture notes, model documentation, and instructor-provided references can be organized alongside the teaching blocks as the course evolves.',
    ],
  },
  {
    sourceTitle: 'Software Delivery Tools 4 Ects',
    title: 'Software Delivery Tools',
    level: 'bachelors',
    credits: '4 ECTS',
    status: 'active',
    featured: true,
    shortDescription:
      'DevOps-focused delivery practices with Azure Boards, GitHub workflows, CI/CD automation, and Azure-based application deployment.',
    deliveryMode: 'Lectures, interactive sessions, and hands-on labs',
    tags: ['DevOps', 'CI/CD', 'Azure'],
    summary:
      'This course builds a practical understanding of software delivery tooling by connecting planning, tracking, source control, workflow automation, and cloud deployment into one coherent delivery flow.',
    schedulePlan: [
      'DevOps, continuous delivery, and continuous quality fundamentals',
      'Planning and tracking with Azure Boards and Delivery Plans',
      'Release-based workflows in GitHub',
      'CI/CD automation with GitHub Actions and Azure Pipelines',
      'Deploying standard and containerized applications to Azure App Service',
    ],
    coreThemes: [
      'core principles of DevOps, continuous delivery, and continuous quality',
      'planning and tracking with Azure Boards and Delivery Plans',
      'source control and collaboration using GitHub release-based workflows',
      'automation of CI/CD pipelines with GitHub Actions and Azure Pipelines',
      'deployment of standard and containerized web applications to Azure App Service',
    ],
    learningOutcomes: [
      'understand the core principles of DevOps, continuous delivery, and continuous quality',
      'plan and track software projects using Azure Boards and Delivery Plans',
      'manage source code and collaborate using GitHub and release-based workflows',
      'automate CI/CD workflows with both GitHub Actions and Azure Pipelines',
      'deploy standard and containerized web applications to Azure App Service',
    ],
    practicalWork: [
      'configure Azure Boards and Delivery Plans for project tracking',
      'connect GitHub workflows with Azure Boards',
      'install GitHub Apps and build delivery workflows',
      'deploy applications and containers through Azure App Service',
    ],
    assignmentWork: [
      'two quizzes based on lecture presentations and weekly reading material',
      'Assignment 1: Azure Boards and Delivery Plans',
      'Assignment 2: release-based workflow in GitHub and Azure Boards integration',
      'Assignment 3: installing GitHub Apps and creating workflows',
      'Assignment 4: deploying an app with GitHub Actions and deploying a containerized app with Azure App Service',
    ],
    assessmentSummary: [
      'The final grade is determined by quizzes and practical assignment work.',
      'Students complete two quizzes focused on core concepts from lectures and reading material.',
      'Students complete four hands-on assignments during the course.',
    ],
    learningEnvironments: [
      'lecture presentations in class and on Moodle',
      'Azure DevOps tools such as Boards and Delivery Plans',
      'GitHub for version control, Actions, and Apps',
      'Azure Cloud, including App Service',
    ],
    materials: [
      'Lecture presentations are available in class and on Moodle.',
      'Relevant Azure and GitHub documentation is linked weekly on Moodle.',
      'Recommended book: DevOps for Dummies.',
    ],
  },
  {
    sourceTitle: 'Software Robotics and Automation 6 ECTs',
    title: 'Software Robotics and Automation',
    level: 'bachelors',
    credits: '6 ECTS',
    status: 'active',
    shortDescription:
      'Robotic process automation with UiPath, Robot Framework, business-oriented automation design, and project-based delivery.',
    deliveryMode: 'UiPath diploma work, individual tasks, and a group project',
    tags: ['RPA', 'UiPath', 'Automation'],
    summary:
      'This course introduces robotic process automation through business-oriented use cases, combining commercial RPA tooling with test automation style practices and a project-based workflow.',
    schedulePlan: [
      'Applications and requirements of software robotics',
      'Automation design with UiPath',
      'Alternative automation work with Robot Framework',
      'Individual UiPath task work and diploma progression',
      'Group project and report writing',
    ],
    coreThemes: [
      'applications and requirements of software robotics',
      'different automation techniques for different use cases',
      'building automated solutions with business needs in mind',
      'UiPath as a market-leading RPA platform',
      'Robot Framework as an additional automation technique',
    ],
    learningOutcomes: [
      'understand the applications and requirements of software robotics',
      'apply different automation techniques to different use cases',
      'build automated solutions that take business needs into account',
    ],
    practicalWork: [
      'complete UiPath Academy diploma work',
      'build individual automation tasks with UiPath',
      'practice automation from a testing-oriented angle with Robot Framework',
      'deliver a group project and written report',
    ],
    assignmentWork: [
      'complete at least seven predetermined UiPath Academy diplomas and upload them to Moodle',
      'finish individual UiPath tasks worth 12 points in total',
      'complete a group project that can earn up to 18 points and is accompanied by a report from the Mini Thesis course',
    ],
    assessmentSummary: [
      'The course assessment is divided into three areas: diplomas, assignments, and a project.',
      'At least seven UiPath Academy diplomas are required.',
      'Individual UiPath tasks are assessed separately.',
      'The group project and report form the largest assessed component.',
    ],
    learningEnvironments: [
      'UiPath Academy and UiPath tooling',
      'Robot Framework',
      'Moodle for submissions',
      'project work connected to the Mini Thesis course',
    ],
    materials: [
      'UiPath Academy materials are a required part of the course path.',
      'UiPath and Robot Framework resources support the hands-on work.',
    ],
  },
  {
    sourceTitle: 'Big Data Analytics 4 ECts',
    title: 'Big Data Analytics',
    level: 'bachelors',
    credits: '4 ECTS',
    status: 'active',
    featured: true,
    shortDescription:
      'Spark-based big data processing, query tuning, MongoDB-backed pipelines, and a group project grounded in large-scale analytics workflows.',
    deliveryMode: 'Coding exercises, lectures, and a group project',
    tags: ['Spark', 'MongoDB', 'Pipelines'],
    summary:
      'This course develops a practical understanding of large-scale data processing by combining Spark, Spark SQL, MongoDB, and project-based analytics work into one end-to-end big data workflow.',
    schedulePlan: [
      'Big data concepts, challenges, and solution patterns',
      'Apache Spark architecture, RDDs, DataFrames, and Spark SQL',
      'Spark SQL query tuning and performance analysis',
      'MongoDB and NoSQL-based storage design',
      'Integrated Spark and MongoDB pipeline project work',
    ],
    coreThemes: [
      'big data concepts, challenges, and solution approaches',
      'Apache Spark architecture and core programming models',
      'Spark SQL tuning and query performance',
      'MongoDB for scalable NoSQL storage',
      'real-world data pipelines that integrate Spark and MongoDB',
    ],
    learningOutcomes: [
      'understand big data concepts and the challenges of large-scale datasets',
      'process data using Spark architecture, RDDs, DataFrames, and Spark SQL',
      'analyze and improve big data performance using Spark SQL tuning techniques',
      'deploy MongoDB for efficient data storage and management',
      'integrate Spark with MongoDB to create scalable data pipelines',
      'build and present a comprehensive big data project from start to finish',
    ],
    practicalWork: [
      'implement Spark-based processing workflows in Python',
      'optimize Spark SQL work on realistic data tasks',
      'store and retrieve data with MongoDB',
      'build and present a group pipeline project',
    ],
    assignmentWork: [
      'complete a group project and final presentation',
      'apply Spark and MongoDB in a pipeline that solves a clearly defined problem',
      'demonstrate the final architecture and explain the technical results',
    ],
    assessmentSummary: [
      'The final grade is based on a multiple-choice exam and a group project with a final presentation.',
      'The project and presentation are graded on a 0-10 point scale.',
      'Project quality is judged by the problem statement, technical implementation, creativity, and the clarity of the demonstration.',
    ],
    learningEnvironments: [
      'Google Colab or VS Code with Python',
      'lecture presentations in class and on Moodle',
      'Apache Spark and MongoDB',
      'official documentation, tutorials, and datasets provided during the course',
    ],
    materials: [
      'Official Spark and MongoDB documentation, tutorials, and datasets are used throughout the course.',
      'Recommended books: Apache Spark for Machine Learning, Learning Spark (2nd Edition), and Beginning Apache Spark 3.',
    ],
  },
  {
    sourceTitle: 'Development of AI Applications 5 ECTs',
    title: 'Development of AI Applications',
    level: 'bachelors',
    credits: '5 ECTS',
    status: 'active',
    featured: true,
    shortDescription:
      'Hands-on development and deployment of AI applications with Hugging Face, diffusion models, large language models, and Gradio interfaces.',
    deliveryMode: 'Coding exercises, lectures, and a group AI application project',
    tags: ['Hugging Face', 'LLMs', 'Gradio'],
    summary:
      'This course focuses on building complete AI applications, from model deployment fundamentals to interactive interfaces, with project work centered on modern large-model tooling.',
    schedulePlan: [
      'Model deployment concepts and challenges',
      'Hugging Face workflows and model development',
      'Diffusion models for generative applications',
      'Large language models for text applications',
      'Interactive interfaces with Gradio and project delivery',
    ],
    coreThemes: [
      'model deployment concepts and deployment challenges',
      'Hugging Face for pre-trained models, transformers, and fine-tuning',
      'diffusion models in theory and application',
      'large language models for text-based AI applications',
      'interactive AI interfaces and public deployment with Gradio',
    ],
    learningOutcomes: [
      'gain a foundation in model deployment, including deployment challenges, architectures, and model serving',
      'develop AI applications with Hugging Face for pre-trained models, transformers, and fine-tuning',
      'explore diffusion models and understand how to deploy them',
      'understand and apply large language models for text-based applications',
      'build interactive AI interfaces with Gradio and deploy them publicly',
      'deliver a real-world AI application project with a final presentation',
    ],
    practicalWork: [
      'prototype AI applications with Hugging Face models and tooling',
      'experiment with diffusion models and LLM-based use cases',
      'build interactive Gradio interfaces',
      'present a complete project that combines model deployment and user experience',
    ],
    assignmentWork: [
      'complete a group project using diffusion models, LLMs, or another large model',
      'choose a suitable platform such as Hugging Face, Gradio, or another approved environment',
      'deliver a final presentation that demonstrates the application, model deployment, and interface',
    ],
    assessmentSummary: [
      'The final grade is primarily determined by a group project and a final presentation.',
      'Students must pass both the project and the presentation.',
      'The project is graded on a 0-10 point scale based on implementation quality, creativity, and communication of results.',
    ],
    learningEnvironments: [
      'Google Colab and Python',
      'lecture presentations in class and on Moodle',
      'Hugging Face and Gradio for hands-on development',
      'documentation and tutorials provided during the course',
    ],
    materials: [
      'Hugging Face and Gradio documentation and tutorials support the practical work.',
      'Lecture presentations and example notebooks are part of the course delivery.',
    ],
  },
  {
    sourceTitle: 'Neural Networks for Computer Vision 5 ECts',
    title: 'Neural Networks for Computer Vision',
    level: 'bachelors',
    credits: '5 ECTS',
    status: 'active',
    shortDescription:
      'Artificial neural networks, convolutional models, transfer learning, and project-based image classification in Python notebooks.',
    deliveryMode: 'Coding exercises, lectures, project work, and a questionnaire',
    tags: ['CNNs', 'Transfer Learning', 'PyTorch'],
    summary:
      'This course develops core computer vision capability by combining neural network fundamentals, optimization, image classification practice, and transfer learning with a project-oriented workflow.',
    schedulePlan: [
      'Artificial neural network basics',
      'Gradient descent and optimization',
      'Simple image classification with neural networks',
      'Convolutional neural networks and training workflows',
      'Transfer learning, project work, and final questionnaire preparation',
    ],
    coreThemes: [
      'artificial neural network structure and function',
      'gradient descent and optimization strategies',
      'simple image classification tasks',
      'convolutional neural networks for more complex image problems',
      'transfer learning with pretrained models',
    ],
    learningOutcomes: [
      'gain a foundation in artificial neural networks and their structure',
      'understand and implement gradient descent and its variants in neural network optimization',
      'build simple image classification solutions with neural networks',
      'understand convolutional neural network architectures and how they support more complex image tasks',
      'train CNNs and evaluate them on datasets such as Rock, Paper, Scissors',
      'apply transfer learning with pretrained models',
      'use course concepts in a small project with a provided dataset',
    ],
    practicalWork: [
      'work in Python notebooks on neural network exercises and image classification tasks',
      'train and evaluate CNN models on structured datasets',
      'use transfer learning for adapted computer vision tasks',
      'deliver a group project and prepare for a final questionnaire',
    ],
    assignmentWork: [
      'complete a group project on a specific dataset or problem',
      'sit the final questionnaire with 30-40 multiple-choice questions',
      'demonstrate enough understanding to pass both the project and the questionnaire',
    ],
    assessmentSummary: [
      'Students must pass both the group project and the questionnaire.',
      'The project is graded on a 0-10 point scale and requires at least 3 points to pass.',
      'The questionnaire requires at least half of the maximum points.',
      'Final grading combines the project work and the questionnaire.',
    ],
    learningEnvironments: [
      'Jupyter notebooks in Python via VS Code or the browser',
      'lecture presentations in class and sometimes via Zoom',
      'GitHub resources connected to the Deep Learning with PyTorch Step-by-Step materials',
    ],
    materials: [
      'Many examples come from the Deep Learning with PyTorch Step-by-Step resources and related GitHub repository.',
      'Lecture slides and dataset-specific instructions support the practical work.',
    ],
  },
  {
    sourceTitle: 'Predictive Analytics with python 5 Ects',
    title: 'Predictive Analytics with Python',
    level: 'bachelors',
    credits: '5 ECTS',
    status: 'active',
    shortDescription:
      'Foundational predictive analytics with supervised and unsupervised learning, regression, multiclass classification, and SVMs in Python.',
    deliveryMode: 'Lectures, coding exercises, and four group assignments',
    tags: ['Supervised Learning', 'Clustering', 'SVM'],
    summary:
      'This course introduces predictive analytics through a compact set of essential machine learning methods and applies them in Python-based group assignment work.',
    schedulePlan: [
      'Supervised learning with k-nearest neighbors',
      'Unsupervised learning with k-means clustering',
      'Linear regression and multiclass classification',
      'Support vector machines and applied assignment work',
    ],
    coreThemes: [
      'supervised learning techniques',
      'unsupervised learning and clustering',
      'regression analysis and multiclass classification',
      'support vector machines and their applications',
    ],
    learningOutcomes: [
      'gain a foundation in supervised learning using k-nearest neighbors as an example',
      'understand unsupervised learning through the k-means clustering algorithm',
      'apply linear regression for predictive analysis and explore multiclass classification',
      'develop knowledge of support vector machines and their applications',
    ],
    practicalWork: [
      'solve predictive analytics tasks in Python with sklearn-style workflows',
      'compare supervised and unsupervised approaches on course exercises',
      'work through assignment-based applications of regression, classification, and clustering',
    ],
    assignmentWork: [
      'complete four group assignments that assess understanding and application of predictive analytics concepts',
      'use Python libraries such as sklearn, numpy, matplotlib, and pandas in the assignment workflow',
    ],
    assessmentSummary: [
      'The final grade is based on four group assignments.',
      'Assignments are assessed on a 0-10 point scale using a rubric that measures understanding and application of the course concepts.',
    ],
    learningEnvironments: [
      'Python libraries including sklearn, numpy, matplotlib, and pandas',
      'VS Code and Google Colab',
      'lecture slides available in class and on Moodle',
      'supplementary documentation and tutorials',
    ],
    materials: [
      'Lecture slides and supplementary documentation support the course themes.',
      'Python library documentation and tutorials are part of the learning path.',
    ],
  },
  {
    sourceTitle: 'Basics of data analysis 3 ects',
    title: 'Basics of Data Analysis',
    level: 'bachelors',
    credits: '3 ECTS',
    status: 'active',
    shortDescription:
      'A foundation in Python programming, preprocessing, numerical work with NumPy, and data visualization with Matplotlib.',
    deliveryMode: 'Python-based workshops and a final group project',
    tags: ['Python', 'NumPy', 'Matplotlib'],
    summary:
      'This course provides a practical entry point into data analysis and Python programming by combining programming basics, preprocessing, numerical work, visualization, and project-based analysis.',
    schedulePlan: [
      'Introduction to data analysis and Python',
      'Python basics',
      'Control flow, functions, and loops',
      'Data analysis and preprocessing',
      'NumPy for numerical data processing',
      'Data visualization with Matplotlib',
    ],
    coreThemes: [
      'Python basics and essential data structures',
      'advanced Python topics such as control flow, functions, and loops',
      'data analysis and pre-processing techniques',
      'NumPy for numerical data work',
      'Matplotlib for data visualization',
    ],
    learningOutcomes: [
      'develop a strong understanding of Python basics, including syntax and data structures for data handling',
      'gain proficiency in advanced Python topics such as control flow, functions, and loops',
      'learn essential data analysis and preprocessing techniques',
      'work with NumPy for numerical data handling and basic numerical operations',
      'build data visualization skills with Matplotlib',
      'apply the course skills to analyze datasets and extract useful insights',
    ],
    practicalWork: [
      'practice Python fundamentals through data-focused exercises',
      'clean and analyze datasets with basic preprocessing techniques',
      'use NumPy and Matplotlib in small analysis tasks',
      'combine the course tools in a final project',
    ],
    assignmentWork: [
      'complete a final group project that demonstrates the course foundations in practice',
    ],
    assessmentSummary: [
      'The final grade is primarily determined by successful completion of a final group project.',
    ],
    learningEnvironments: [
      'Python-based practical work',
      'NumPy and Matplotlib as core technical tools',
      'dataset-driven exercises and final project work',
    ],
    materials: [
      'The source description does not list separate books or articles.',
      'Core materials should center on Python, NumPy, preprocessing, and Matplotlib practice aligned with the teaching sessions.',
    ],
  },
  {
    sourceTitle: 'Data processing with python 4 ects',
    title: 'Data Processing with Python',
    level: 'bachelors',
    credits: '4 ECTS',
    status: 'active',
    shortDescription:
      'Python-based data processing with Jupyter, NumPy, Pandas, Matplotlib, exploratory data analysis, and a project presentation.',
    deliveryMode: 'Lectures, Python labs, and a group dataset project',
    tags: ['Pandas', 'EDA', 'Visualization'],
    summary:
      'This course develops core data processing skills by combining notebook-based Python work, common data libraries, exploratory analysis, and a group project built around a real-world dataset.',
    schedulePlan: [
      'Jupyter notebooks and Python structures',
      'NumPy for numerical data processing',
      'Matplotlib for visualization',
      'Pandas for data manipulation and analysis',
      'Exploratory data analysis',
      'Project work with dataset analysis and presentation',
    ],
    coreThemes: [
      'Jupyter notebooks and Python structures',
      'NumPy for numerical data processing',
      'Matplotlib for meaningful data visualization',
      'Pandas for data manipulation and analysis',
      'exploratory data analysis and communicating findings',
    ],
    learningOutcomes: [
      'gain a solid understanding of Jupyter notebooks and basic Python structures',
      'work with numerical data through NumPy array manipulation and operations',
      'develop data visualization skills with Matplotlib',
      'use Pandas for data manipulation and analysis with DataFrames',
      'analyze a real-world dataset through exploratory data analysis',
      'complete a final project that demonstrates practical data processing ability',
    ],
    practicalWork: [
      'use Google Colab and Python for practical exercises',
      'analyze and visualize a real-world dataset with NumPy, Pandas, and Matplotlib',
      'prepare exploratory analysis and communicate insights through a group workflow',
      'deliver a final report and presentation',
    ],
    assignmentWork: [
      'complete a group project in groups of three',
      'submit a final report that documents the process, methods, and insights',
      'complete a final presentation connected to the dataset project',
    ],
    assessmentSummary: [
      'Students must pass both the group project and the final presentation.',
      'The project is graded on a 0-16 point scale.',
      'The rubric covers Python use, NumPy, Pandas, Matplotlib, visualization quality, EDA, analysis quality, and final report readability.',
    ],
    learningEnvironments: [
      'Google Colab and Python',
      'lecture presentations delivered in class and on Zoom',
      'NumPy, Pandas, and Matplotlib used throughout the course',
      'online documentation and tutorials provided during the course',
    ],
    materials: [
      'Documentation and tutorials for Python, NumPy, Pandas, and Matplotlib support the course.',
      'Lecture presentations and example notebooks are part of the learning path.',
    ],
  },
];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function titleCaseLevel(level) {
  return level === 'masters' ? "Master's" : "Bachelor's";
}

function getCourseSlug(course) {
  return slugify(course.title);
}

function getCourseCatalogPath(course) {
  return course.level === 'masters' ? '/masters' : '/bachelors';
}

function getCourseOverviewPath(course) {
  return `/docs/${course.level}/${getCourseSlug(course)}`;
}

function getCourseDocsBasePath(course) {
  return `/docs/${course.level}/${getCourseSlug(course)}`;
}

function getCourseDocPath(course, relativePath) {
  return `${getCourseDocsBasePath(course)}/${relativePath}`;
}

function getCoursePeriodLabel(course) {
  if (course.period) {
    return course.period;
  }

  return 'See the schedule page and the published course calendar.';
}

function formatBulletList(items) {
  return items.map((item) => `- ${item}`).join('\n');
}

function formatNumberedList(items) {
  return items.map((item, index) => `${index + 1}. ${item}`).join('\n');
}

function escapeForFrontMatter(value) {
  return value.replace(/"/g, '\\"');
}

function ensureDir(targetDir) {
  fs.mkdirSync(targetDir, {recursive: true});
}

function writeFile(targetPath, content) {
  fs.writeFileSync(targetPath, content.trim() + '\n', 'utf8');
}

function removeObsoleteCourseDirs(level, desiredSlugs) {
  const levelDir = path.join(docsRoot, level);
  const entries = fs.readdirSync(levelDir, {withFileTypes: true});
  for (const entry of entries) {
    if (entry.isDirectory() && !desiredSlugs.has(entry.name)) {
      fs.rmSync(path.join(levelDir, entry.name), {recursive: true, force: true});
    }
  }
}

function genericScheduleIntro(course) {
  if (course.scheduleSource) {
    return course.scheduleSource;
  }

  return 'The current source description does not include a fixed week-by-week calendar. Use the course workspace and instructor updates for session-level dates when they are published.';
}

function genericMaterials(course) {
  if (course.materials.length > 0) {
    return course.materials;
  }

  return ['The current source description does not include a dedicated reading list.'];
}

function genericFaq(course) {
  const materials = genericMaterials(course);
  return [
    {
      question: 'Where do I find the detailed schedule?',
      answer: genericScheduleIntro(course),
    },
    {
      question: 'How is the course assessed?',
      answer: course.assessmentSummary.join(' '),
    },
    {
      question: 'What kind of practical work should I expect?',
      answer: course.practicalWork.join(' '),
    },
    {
      question: 'Which tools or learning environments are central to the course?',
      answer: course.learningEnvironments.join(' '),
    },
    {
      question: 'Where do I find materials and readings?',
      answer: materials.join(' '),
    },
  ];
}

function createPageNav(course, includeOverviewLink = true) {
  const links = [
    `<a href="${getCourseCatalogPath(course)}">Back to ${titleCaseLevel(course.level)} courses</a>`,
  ];

  if (includeOverviewLink) {
    links.push(`<a href="${getCourseOverviewPath(course)}">Course overview</a>`);
  }

  return `<div className="course-page-nav">\n  ${links.join('\n  ')}\n</div>`;
}

function createOverviewQuickLinks(course) {
  const quickLinks = [
    {
      title: 'Syllabus',
      description: 'Course scope, assessment model, learning environments, and supporting materials.',
      href: getCourseDocPath(course, 'course-information/syllabus'),
    },
    {
      title: 'Schedule',
      description: 'The teaching sequence and the place to check timing and logistics guidance.',
      href: getCourseDocPath(course, 'course-information/schedule'),
    },
    {
      title: 'Lectures',
      description: 'The main teaching blocks and the key themes that shape each session.',
      href: getCourseDocPath(course, 'learning-materials/lectures'),
    },
    {
      title: 'Labs',
      description: 'Hands-on work, practical activities, and preparation for applied sessions.',
      href: getCourseDocPath(course, 'learning-materials/labs'),
    },
    {
      title: 'Assignments',
      description: 'Assessed work, expected deliverables, and how completion is evaluated.',
      href: getCourseDocPath(course, 'course-work/assignments'),
    },
  ];

  const cards = quickLinks
    .map(
      (link) => `  <a className="course-quick-link" href="${link.href}">
    <strong>${link.title}</strong>
    <span>${link.description}</span>
  </a>`,
    )
    .join('\n');

  return `<div className="course-quick-links">\n${cards}\n</div>`;
}

function createOverview(course) {
  const slug = getCourseSlug(course);
  const badgeLine = [course.code, course.credits]
    .filter(Boolean)
    .map((value) => `\`${value}\``)
    .join(' | ');
  const statusItems = [
    `- Status: ${course.status.charAt(0).toUpperCase()}${course.status.slice(1)}`,
    `- Period: ${getCoursePeriodLabel(course)}`,
    course.deliveryMode ? `- Delivery mode: ${course.deliveryMode}` : null,
    course.credits ? `- Credits: ${course.credits}` : null,
  ].filter(Boolean).join('\n');

  return `
---
title: ${escapeForFrontMatter(course.title)}
sidebar_label: Overview
description: Course entry point for ${escapeForFrontMatter(course.title)}.
slug: /${course.level}/${slug}
sidebar_position: 1
---

${createPageNav(course, false)}

# ${course.title}

${badgeLine}

${course.summary}

## Navigate this course

Use this overview as your starting point. The links below take you to the most important course sections.

${createOverviewQuickLinks(course)}

## Course status

${statusItems}

## Core themes

${formatBulletList(course.coreThemes)}

## Learning outcomes

By the end of the course, students should be able to:

${formatBulletList(course.learningOutcomes)}

## What you will do

${formatBulletList(course.practicalWork)}
`;
}

function createSyllabus(course) {
  return `
---
title: Syllabus
description: Syllabus overview for ${escapeForFrontMatter(course.title)}.
sidebar_position: 1
---

${createPageNav(course)}

# Syllabus

Use this page to understand the course scope, the assessment model, the working environments, and the materials you are expected to use during the course.

## Course focus

${course.summary}

## Thematic coverage

${formatBulletList(course.coreThemes)}

## Assessment and completion

${formatBulletList(course.assessmentSummary)}

## Learning environments

${formatBulletList(course.learningEnvironments)}

## Materials and references

${formatBulletList(genericMaterials(course))}
`;
}

function createSchedule(course) {
  return `
---
title: Schedule
description: Teaching sequence for ${escapeForFrontMatter(course.title)}.
sidebar_position: 2
---

${createPageNav(course)}

# Schedule

Use this page as the planning view for the course. It shows the intended sequence of topics and points you to the place where timing details are published.

${genericScheduleIntro(course)}

## Planned sequence

${formatNumberedList(course.schedulePlan)}
`;
}

function createLectures(course) {
  return `
---
title: Lectures
description: Lecture blocks for ${escapeForFrontMatter(course.title)}.
sidebar_position: 1
---

${createPageNav(course)}

# Lectures

Use this page to see the teaching blocks that shape the lecture flow and to revisit the ideas that connect the sessions together.

The lecture flow follows the core themes below and prepares students for the practical work in the course.

## Lecture blocks

${formatNumberedList(course.schedulePlan)}

## Key themes to revisit

${formatBulletList(course.coreThemes)}
`;
}

function createLabs(course) {
  return `
---
title: Labs
description: Practical work for ${escapeForFrontMatter(course.title)}.
sidebar_position: 2
---

${createPageNav(course)}

# Labs

Use this page to prepare for hands-on work and to understand how the practical activities connect to the learning outcomes of the course.

Hands-on work is a central part of this course. The practical activities below are the main bridge between the lecture topics and the assessed work.

## Practical activities

${formatBulletList(course.practicalWork)}

## Working environments

${formatBulletList(course.learningEnvironments)}
`;
}

function createAssignments(course) {
  return `
---
title: Assignments
description: Assignment structure for ${escapeForFrontMatter(course.title)}.
sidebar_position: 1
---

${createPageNav(course)}

# Assignments

Use this page to track the work you need to complete and to understand how course completion is assessed.

## Expected work

${formatBulletList(course.assignmentWork)}

## Assessment overview

${formatBulletList(course.assessmentSummary)}
`;
}

function createReadings(course) {
  return `
---
title: Readings
description: Readings and materials for ${escapeForFrontMatter(course.title)}.
sidebar_position: 1
---

${createPageNav(course)}

# Readings

Use this page when you need the supporting documentation, reference material, or course resources that help you prepare for lectures, labs, and assignments.

## Core materials

${formatBulletList(genericMaterials(course))}
`;
}

function createFaq(course) {
  const items = genericFaq(course)
    .map(
      (item) => `## ${item.question}\n\n${item.answer}`,
    )
    .join('\n\n');

  return `
---
title: FAQ
description: Frequently asked questions for ${escapeForFrontMatter(course.title)}.
sidebar_position: 2
---

${createPageNav(course)}

# FAQ

Use this page for quick answers about course logistics, assessment, practical work, learning environments, and supporting materials.

${items}
`;
}

function createCategoryFile(course, position) {
  const slug = getCourseSlug(course);
  return JSON.stringify(
    {
      label: course.title,
      position,
      collapsed: false,
      link: {
        type: 'doc',
        id: `${course.level}/${slug}/overview`,
      },
    },
    null,
    2,
  );
}

function createSectionCategoryFile(label, position) {
  return JSON.stringify(
    {
      label,
      position,
      collapsed: false,
    },
    null,
    2,
  );
}

function buildCoursesTs(courses) {
  const courseMeta = courses.map((course) => {
    const slug = getCourseSlug(course);
    return {
      id: slug,
      title: course.title,
      slug,
      level: course.level,
      ...(course.code ? {code: course.code} : {}),
      ...(course.credits ? {credits: course.credits} : {}),
      shortDescription: course.shortDescription,
      ...(course.period ? {period: course.period} : {}),
      ...(course.deliveryMode ? {deliveryMode: course.deliveryMode} : {}),
      status: course.status,
      tags: course.tags,
      docPath: getCourseOverviewPath(course),
      ...(course.featured ? {featured: true} : {}),
    };
  });

  return `import type {CourseLevel, CourseMeta, CourseStatus} from '../types/site';

export const levelContent: Record<
  CourseLevel,
  {
    label: string;
    shortLabel: string;
    description: string;
    pageTitle: string;
    pageDescription: string;
  }
> = {
  masters: {
    label: "Master's Courses",
    shortLabel: "Master's",
    description:
      'Graduate-level courses in data engineering, machine learning infrastructure, and applied natural language processing.',
    pageTitle: "Master's courses in data engineering, MLOps, and language AI",
    pageDescription:
      'This catalog groups graduate teaching material into consistent course spaces with structured docs for overviews, schedules, labs, assignments, readings, and FAQs.',
  },
  bachelors: {
    label: "Bachelor's Courses",
    shortLabel: "Bachelor's",
    description:
      'Bachelor-level courses in software delivery, automation, analytics, AI applications, computer vision, and Python-based data work.',
    pageTitle: "Bachelor's courses in software delivery, analytics, and applied AI",
    pageDescription:
      'The undergraduate catalog keeps hands-on courses easy to scan while preserving a consistent docs structure for semester updates and long-term reuse.',
  },
};

export const courses: CourseMeta[] = ${JSON.stringify(courseMeta, null, 2)};

const statusOrder: Record<CourseStatus, number> = {
  active: 0,
  planned: 1,
  archived: 2,
};

export function getCoursesByLevel(level: CourseLevel): CourseMeta[] {
  return courses
    .filter((course) => course.level === level)
    .sort((left, right) => {
      const byStatus = statusOrder[left.status] - statusOrder[right.status];
      if (byStatus !== 0) {
        return byStatus;
      }

      return left.title.localeCompare(right.title);
    });
}

export function getFeaturedCourses(level?: CourseLevel): CourseMeta[] {
  return courses.filter((course) => course.featured && (level ? course.level === level : true));
}

export function getCoursesByStatus(level: CourseLevel, status: CourseStatus): CourseMeta[] {
  return getCoursesByLevel(level).filter((course) => course.status === status);
}
`;
}

function validateSource(courses) {
  const source = fs.readFileSync(sourcePath, 'utf8');
  const normalizedSource = source
    .replaceAll('\u00e2\u20ac\u2122', "'")
    .replaceAll('\u00e2\u20ac\u201c', '-')
    .replaceAll('\u00e2\u20ac\u201d', '-')
    .replaceAll('\u00c2', '');

  for (const course of courses) {
    if (!normalizedSource.includes(course.sourceTitle)) {
      throw new Error(`Source title not found in courses-descriptions.md: ${course.sourceTitle}`);
    }
  }
}

function writeCourseDocs(course, position) {
  const slug = getCourseSlug(course);
  const courseDir = path.join(docsRoot, course.level, slug);
  fs.rmSync(courseDir, {recursive: true, force: true});
  ensureDir(courseDir);
  ensureDir(path.join(courseDir, 'course-information'));
  ensureDir(path.join(courseDir, 'learning-materials'));
  ensureDir(path.join(courseDir, 'course-work'));
  ensureDir(path.join(courseDir, 'support'));

  writeFile(path.join(courseDir, '_category_.json'), createCategoryFile(course, position));
  writeFile(path.join(courseDir, 'overview.mdx'), createOverview(course));
  writeFile(
    path.join(courseDir, 'course-information', '_category_.json'),
    createSectionCategoryFile('Course Information', 1),
  );
  writeFile(path.join(courseDir, 'course-information', 'syllabus.mdx'), createSyllabus(course));
  writeFile(path.join(courseDir, 'course-information', 'schedule.mdx'), createSchedule(course));
  writeFile(
    path.join(courseDir, 'learning-materials', '_category_.json'),
    createSectionCategoryFile('Learning Materials', 2),
  );
  writeFile(path.join(courseDir, 'learning-materials', 'lectures.mdx'), createLectures(course));
  writeFile(path.join(courseDir, 'learning-materials', 'labs.mdx'), createLabs(course));
  writeFile(
    path.join(courseDir, 'course-work', '_category_.json'),
    createSectionCategoryFile('Course Work', 3),
  );
  writeFile(path.join(courseDir, 'course-work', 'assignments.mdx'), createAssignments(course));
  writeFile(
    path.join(courseDir, 'support', '_category_.json'),
    createSectionCategoryFile('Support', 4),
  );
  writeFile(path.join(courseDir, 'support', 'readings.mdx'), createReadings(course));
  writeFile(path.join(courseDir, 'support', 'faq.mdx'), createFaq(course));
}

function main() {
  validateSource(courseDefinitions);

  const masterSlugs = new Set(
    courseDefinitions.filter((course) => course.level === 'masters').map((course) => slugify(course.title)),
  );
  const bachelorSlugs = new Set(
    courseDefinitions.filter((course) => course.level === 'bachelors').map((course) => slugify(course.title)),
  );

  removeObsoleteCourseDirs('masters', masterSlugs);
  removeObsoleteCourseDirs('bachelors', bachelorSlugs);

  let masterPosition = 1;
  let bachelorPosition = 1;

  for (const course of courseDefinitions) {
    if (course.level === 'masters') {
      writeCourseDocs(course, masterPosition);
      masterPosition += 1;
      continue;
    }

    writeCourseDocs(course, bachelorPosition);
    bachelorPosition += 1;
  }

  writeFile(coursesDataPath, buildCoursesTs(courseDefinitions));

  const totalCourses = courseDefinitions.length;
  const totalDocs = totalCourses * GENERATED_PAGE_COUNT;
  console.log(`Synced ${totalCourses} courses and wrote ${totalDocs} course documents.`);
}

main();
