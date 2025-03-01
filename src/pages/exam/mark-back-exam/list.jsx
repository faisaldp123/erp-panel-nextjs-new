import Layout from "../../../components/ExamLayout"

const ExamTimeTable = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-purple-700">Mark Back Exam</h1>
      <div className="mt-4 border p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Exam Schedule</h2>
        <p className="mt-2 text-gray-700">The latest exam schedule is now available on the portal.</p>
      </div>
    </Layout>
  );
};

export default ExamTimeTable;
