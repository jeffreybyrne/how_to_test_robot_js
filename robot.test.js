const {newRobot, station, isWorkDay, prioritizeTasks}  = require("./robot.js");

// remove .skip when you're ready to implement the test
test('test_that_foreign_robot_needing_repairs_sent_to_station_1', () => {
  // arrange
  testRobot = newRobot(true,true,false);
  // act
  result = station(testRobot);
  // assert
  expect(result).toEqual(1);
});

test('test_that_vintage_robot_needing_repairs_sent_to_station_2', () => {
  // arrange
  testRobot = newRobot(true,false,true);
  // act
  result = station(testRobot);
  // assert
  expect(result).toEqual(2);
});

test.skip('test_that_standard_robot_needing_repairs_sent_to_station_3', () => {
  // arrange

  // act

  // assert
});

test.skip('test_that_robot_in_good_condition_sent_to_station_4', () => {
  // arrange

  // act

  // assert
});

test.skip('test_prioritize_tasks_with_empty_todo_list_returns_negative_one', () => {
  // arrange

  // act

  // assert
})

test.skip('test_prioritize_tasks_with_todos_returns_max_todo_value', () => {
  // arrange

  // act

  // assert
});

test.skip('test_workday_on_day_off_returns_false', () => {
  // arrange

  // act

  // assert
});

test.skip('test_workday_not_day_off_returns_true', () => {
  // arrange

  // act

  // assert
});
