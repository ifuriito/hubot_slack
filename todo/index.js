'use strict';
// key: タスクの文字列 value: 完了しているかどうかの真偽値
const tasks = new Map();

/**
* TODOを追加する
* @param {string} task
*/
function todo(task) {
  tasks.set(task, false);
}
