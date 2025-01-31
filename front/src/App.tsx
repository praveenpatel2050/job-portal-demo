import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState<{
    name: string;
    mobile: string;
    email: string;
    skills: string[];
    experience: string;
    resume: File | null;
  }>({
    name: "",
    mobile: "",
    email: "",
    skills: [],
    experience: "",
    resume: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "resume" && files) {
      setFormData({ ...formData, resume: files[0] });
    } else if (name === "skills") {
      const options = (e.target as HTMLSelectElement).options;
      const selectedSkills = [];
      for (const option of options) {
        if (option.selected) {
          selectedSkills.push(option.value);
        }
      }
      setFormData({ ...formData, skills: selectedSkills });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      const value = formData[key as keyof typeof formData];
      if (value instanceof File) {
        data.append(key, value);
      } else {
        data.append(key, value as string);
      }
    }

    try {
      const response = await fetch("/api/saveFormData", {
        method: "POST",
        body: data,
      });
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border rounded-lg"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="mobile" className="block text-gray-700 font-bold mb-2">
          Mobile Number:
        </label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          className="w-full px-3 py-2 border rounded-lg"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email Id:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-lg"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="skills" className="block text-gray-700 font-bold mb-2">
          Skills:
        </label>
        <select
          id="skills"
          name="skills"
          className="w-full px-3 py-2 border rounded-lg"
          multiple
          value={formData.skills}
          onChange={handleChange}
          required
        >
          <option value="react">React</option>
          <option value="nodejs">Nodejs</option>
          <option value="java">Java</option>
          <option value="backend">Backend</option>
          <option value="frontend">Frontend</option>
          <option value="angular">Angular</option>
          <option value="nextjs">Next Js</option>
          <option value="devops">DevOps</option>
          <option value="devsecops">DevSecOps</option>
          <option value="support">Support</option>
          <option value="tech">Tech</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="experience"
          className="block text-gray-700 font-bold mb-2"
        >
          Total experience in years:
        </label>
        <input
          type="number"
          id="experience"
          name="experience"
          className="w-full px-3 py-2 border rounded-lg"
          value={formData.experience}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="resume" className="block text-gray-700 font-bold mb-2">
          Resume:
        </label>
        <input
          type="file"
          id="resume"
          name="resume"
          className="w-full px-3 py-2 border rounded-lg"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}

export default App;
