class ProfessorError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ProfessorError';
  }
}

export default ProfessorError;
