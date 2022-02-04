import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import baseUrl from "./helper";

@Injectable({
  providedIn: "root",
})
export class QuizService {
  constructor(private http: HttpClient) {}

  public quizzes() {
    return this.http.get(`${baseUrl}/quiz/`);
  }

  //add new Quiz
  public addQuiz(Quiz: any) {
    return this.http.post(`${baseUrl}/quiz/`, Quiz);
  }

  //delete Quiz
  public deleteQuiz(qid: any) {
    return this.http.delete(`${baseUrl}/quiz/${qid}`);
  }

  //get Quiz Single quiz
  public getQuiz(qid: any) {
    return this.http.get(`${baseUrl}/quiz/${qid}`);
  }

  //update new Quiz
  public updateQuiz(Quiz: any) {
    return this.http.put(`${baseUrl}/quiz/`, Quiz);
  }

  //get Quizzes of category

  public getQuizzesOfCategory(cid: any) {
    return this.http.get(`${baseUrl}/quiz/category/${cid}`);
  }

  //get  Active Quizzes
  public getActiveQuizzes() {
    return this.http.get(`${baseUrl}/quiz/active`);
  }

  //get  active Quizzes Of category
  public getActiveQuizzesOfCategory(cid: any) {
    return this.http.get(`${baseUrl}/quiz/category/active/${cid}`);
  }
}
