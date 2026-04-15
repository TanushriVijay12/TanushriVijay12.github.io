const projects = [
  {
    title: "Text Classification with TF-IDF and Neural Networks",
    description:
      "Built a text classification pipeline using data cleaning, lemmatization, TF-IDF vectorization, classical ML models, and a neural network.",
    tech: ["Python", "scikit-learn", "TensorFlow", "Keras", "SpaCy"],
    points: [
      "Benchmarked Naive Bayes, Passive Aggressive, Random Forest, and dense neural network models",
      "Used 5-fold GridSearchCV for tuning and tracked metrics such as F1 and AUC-ROC",
      "Achieved strong performance with the best model on the final test set"
    ],
    github: "https://github.com/TanushriVijay12"
  },
  {
    title: "Flight Delay Analysis using Hadoop MapReduce",
    description:
      "Developed distributed MapReduce jobs to analyze airline delay data on a Hadoop cluster.",
    tech: ["Java", "Hadoop", "HDFS", "MapReduce", "AWS EC2"],
    points: [
      "Processed airline datasets in a distributed environment",
      "Computed on-time performance and taxi metrics",
      "Analyzed delay causes including carrier, weather, NAS, security, and late aircraft"
    ],
    github: "https://github.com/TanushriVijay12/flight-delay-mapreduce-BigData"
  },
  {
    title: "Abdominal Trauma Detection using YOLOv8",
    description:
      "Implemented a deep learning pipeline for trauma detection in medical imaging using YOLOv8.",
    tech: ["Python", "YOLOv8", "TensorFlow", "Keras"],
    points: [
      "Worked with medical imaging data and custom class setup",
      "Applied training and fine-tuning for object detection tasks",
      "Focused on improving diagnostic support through deep learning"
    ],
    github: "https://github.com/TanushriVijay12"
  }
];

export default projects;