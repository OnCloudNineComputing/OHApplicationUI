export class CourseModel {
  id: string;
  course_name: string;
  course_year: number;
  course_sem: string;
  dept: string;
  course_number: string;
  section: string;
  credits: number;
  call_number: number;
  professors: string;
  teaching_assistants: string[];
  course_days: string;
  start_time: string;
  end_time: string;
  location: string;
  enrollment: number;
  links: any;
}
