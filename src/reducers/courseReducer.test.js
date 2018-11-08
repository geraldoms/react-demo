import expect from "expect";
import coursereducer from "./courseReducer";
import * as actions from "../actions/courseActions";

describe("Course Reducer", () => {
  it("should add course when passes CREATE_COURSE_SUCCESS", () => {
    const initialState = [{ title: "A" }, { title: "B" }];
    const newCourse = { title: "C" };
    const action = actions.createCourseSuccess(newCourse);
    const newState = coursereducer(initialState, action);

    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual("A");
    expect(newState[1].title).toEqual("B");
    expect(newState[2].title).toEqual("C");
  });
  it("should add course when passes UPDATE_COURSE_SUCCESS", () => {
    const initialState = [
      { id: "A", title: "A" },
      { id: "B", title: "B" },
      { id: "C", title: "C" }
    ];
    const course = { id: "C", title: "New title" };
    const action = actions.updateCourseSuccess(course);

    const newState = coursereducer(initialState, action);
    const updatedCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == "A");

    expect(newState.length).toEqual(3);
    expect(updatedCourse.title).toEqual("New title");
    expect(untouchedCourse.title).toEqual("A");
  });
});