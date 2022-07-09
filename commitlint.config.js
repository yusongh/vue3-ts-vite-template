/**
 * build 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
 * ci 持续集成修改
 * chore 其他修改, 比如改变构建流程、或者增加依赖库、工具等
 * docs 仅文档新增/改动
 * feat 新特性、新功能
 * fix 修补某功能的bug
 * perf 优化相关，比如提升性能、体验
 * refactor 重构某个功能
 * revert 回滚到上一个版本
 * style 代码格式修改, 注意不是 css 修改
 * test 测试用例修改
 * update 更新某功能
 * optimize: 优化构建工具或运行时性能
 */
module.exports = { extends: ['@commitlint/config-conventional'] }
