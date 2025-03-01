import { useRouter } from "next/router";

const examLinks = [
  { id: 1, title: "Home", path: "/exam" },
  { id: 2, title: "Exam Time Table", path: "/exam/exam-timetable/list" },
  { id: 3, title: "Mark Back Exams", path: "/exam/mark-back-exam/list" },
  { id: 4, title: "Exam Appeared Students", path: "/exam/exam-appeared-students/list" },
];

const ExamLayout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 border rounded-lg shadow-md p-4 hidden md:block">
        <h2 className="text-xl font-bold text-purple-700">Exams</h2>
        <ul className="mt-4 space-y-2">
          {examLinks.map((link) => (
            <li
              key={link.id}
              className={`p-3 rounded-md cursor-pointer ${
                router.pathname === link.path ? "bg-purple-200 text-purple-900" : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => router.push(link.path)}
            >
              <p className="font-medium">{link.title}</p>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content (Right Section) */}
      <div className="flex-1 rounded-lg p-6 mb-4">
        {children}
      </div>
    </div>
  );
};

export default ExamLayout;
