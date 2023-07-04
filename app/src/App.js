import React from 'react';
import { useForm } from 'react-hook-form';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);


export default function AuthForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })} />
      {errors.email && <p>{errors.email.message}</p>}
      
      <select {...register("grade", { required: "Grade is required" })}>
        <option value="">Select...</option>
        <option value="1">1st Grade</option>
        <option value="2">2nd Grade</option>
        <option value="3">3rd Grade</option>
        // 他のオプションを追加...
      </select>
      {errors.grade && <p>{errors.grade.message}</p>}

      <input type="submit" />
    </form>
  );
}
