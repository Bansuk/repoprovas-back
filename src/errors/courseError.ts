class CourseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CourseError';
  }
}

export default CourseError;
