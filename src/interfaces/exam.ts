interface Exam {
  name: string;
  category: string;
  course: string;
  professor: string;
  examLink: string;
}

interface ExamDB extends Omit<Exam, 'category' | 'course' | 'professor'> {
  categoryId: number;
  courseId: number;
  professorId: number;
  classId: number;
}

export { Exam, ExamDB };
