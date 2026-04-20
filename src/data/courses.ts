import type {CourseLevel, CourseMeta, CourseStatus} from '../types/site';

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

export const courses: CourseMeta[] = [
  {
    "id": "machine-learning-infrastructure-management",
    "title": "Machine Learning Infrastructure Management",
    "slug": "machine-learning-infrastructure-management",
    "level": "masters",
    "code": "M3C3",
    "credits": "5 ECTS",
    "shortDescription": "Cloud-based ML infrastructure, infrastructure-as-code, orchestration, and serving optimization for production machine learning systems.",
    "deliveryMode": "In-class lectures, practical tasks, and teamwork",
    "status": "active",
    "tags": [
      "Cloud",
      "IaC",
      "MLOps"
    ],
    "docPath": "/docs/masters/machine-learning-infrastructure-management",
    "featured": true
  },
  {
    "id": "data-engineering",
    "title": "Data Engineering",
    "slug": "data-engineering",
    "level": "masters",
    "code": "M2C2",
    "credits": "5 ECTS",
    "shortDescription": "Cloud-based data engineering with pipelines, ETL, storage design, governance, and big data processing for machine learning contexts.",
    "deliveryMode": "In-class lectures, practical tasks, and teamwork",
    "status": "active",
    "tags": [
      "Data Engineering",
      "ETL",
      "Cloud"
    ],
    "docPath": "/docs/masters/data-engineering",
    "featured": true
  },
  {
    "id": "applied-natural-language-processing",
    "title": "Applied Natural Language Processing",
    "slug": "applied-natural-language-processing",
    "level": "masters",
    "code": "M4C3",
    "credits": "5 ECTS",
    "shortDescription": "Practical natural language processing with preprocessing, embeddings, deep learning models, translation, dialogue systems, and modern language model architectures.",
    "deliveryMode": "Implementation-focused lectures and model development sessions",
    "status": "active",
    "tags": [
      "NLP",
      "Embeddings",
      "LLMs"
    ],
    "docPath": "/docs/masters/applied-natural-language-processing",
    "featured": true
  },
  {
    "id": "software-delivery-tools",
    "title": "Software Delivery Tools",
    "slug": "software-delivery-tools",
    "level": "bachelors",
    "credits": "4 ECTS",
    "shortDescription": "DevOps-focused delivery practices with Azure Boards, GitHub workflows, CI/CD automation, and Azure-based application deployment.",
    "deliveryMode": "Lectures, interactive sessions, and hands-on labs",
    "status": "active",
    "tags": [
      "DevOps",
      "CI/CD",
      "Azure"
    ],
    "docPath": "/docs/bachelors/software-delivery-tools",
    "featured": true
  },
  {
    "id": "software-robotics-and-automation",
    "title": "Software Robotics and Automation",
    "slug": "software-robotics-and-automation",
    "level": "bachelors",
    "credits": "6 ECTS",
    "shortDescription": "Robotic process automation with UiPath, Robot Framework, business-oriented automation design, and project-based delivery.",
    "deliveryMode": "UiPath diploma work, individual tasks, and a group project",
    "status": "active",
    "tags": [
      "RPA",
      "UiPath",
      "Automation"
    ],
    "docPath": "/docs/bachelors/software-robotics-and-automation"
  },
  {
    "id": "big-data-analytics",
    "title": "Big Data Analytics",
    "slug": "big-data-analytics",
    "level": "bachelors",
    "credits": "4 ECTS",
    "shortDescription": "Spark-based big data processing, query tuning, MongoDB-backed pipelines, and a group project grounded in large-scale analytics workflows.",
    "deliveryMode": "Coding exercises, lectures, and a group project",
    "status": "active",
    "tags": [
      "Spark",
      "MongoDB",
      "Pipelines"
    ],
    "docPath": "/docs/bachelors/big-data-analytics",
    "featured": true
  },
  {
    "id": "development-of-ai-applications",
    "title": "Development of AI Applications",
    "slug": "development-of-ai-applications",
    "level": "bachelors",
    "credits": "5 ECTS",
    "shortDescription": "Hands-on development and deployment of AI applications with Hugging Face, diffusion models, large language models, and Gradio interfaces.",
    "deliveryMode": "Coding exercises, lectures, and a group AI application project",
    "status": "active",
    "tags": [
      "Hugging Face",
      "LLMs",
      "Gradio"
    ],
    "docPath": "/docs/bachelors/development-of-ai-applications",
    "featured": true
  },
  {
    "id": "neural-networks-for-computer-vision",
    "title": "Neural Networks for Computer Vision",
    "slug": "neural-networks-for-computer-vision",
    "level": "bachelors",
    "credits": "5 ECTS",
    "shortDescription": "Artificial neural networks, convolutional models, transfer learning, and project-based image classification in Python notebooks.",
    "deliveryMode": "Coding exercises, lectures, project work, and a questionnaire",
    "status": "active",
    "tags": [
      "CNNs",
      "Transfer Learning",
      "PyTorch"
    ],
    "docPath": "/docs/bachelors/neural-networks-for-computer-vision"
  },
  {
    "id": "predictive-analytics-with-python",
    "title": "Predictive Analytics with Python",
    "slug": "predictive-analytics-with-python",
    "level": "bachelors",
    "credits": "5 ECTS",
    "shortDescription": "Foundational predictive analytics with supervised and unsupervised learning, regression, multiclass classification, and SVMs in Python.",
    "deliveryMode": "Lectures, coding exercises, and four group assignments",
    "status": "active",
    "tags": [
      "Supervised Learning",
      "Clustering",
      "SVM"
    ],
    "docPath": "/docs/bachelors/predictive-analytics-with-python"
  },
  {
    "id": "basics-of-data-analysis",
    "title": "Basics of Data Analysis",
    "slug": "basics-of-data-analysis",
    "level": "bachelors",
    "credits": "3 ECTS",
    "shortDescription": "A foundation in Python programming, preprocessing, numerical work with NumPy, and data visualization with Matplotlib.",
    "deliveryMode": "Python-based workshops and a final group project",
    "status": "active",
    "tags": [
      "Python",
      "NumPy",
      "Matplotlib"
    ],
    "docPath": "/docs/bachelors/basics-of-data-analysis"
  },
  {
    "id": "data-processing-with-python",
    "title": "Data Processing with Python",
    "slug": "data-processing-with-python",
    "level": "bachelors",
    "credits": "4 ECTS",
    "shortDescription": "Python-based data processing with Jupyter, NumPy, Pandas, Matplotlib, exploratory data analysis, and a project presentation.",
    "deliveryMode": "Lectures, Python labs, and a group dataset project",
    "status": "active",
    "tags": [
      "Pandas",
      "EDA",
      "Visualization"
    ],
    "docPath": "/docs/bachelors/data-processing-with-python"
  }
];

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
