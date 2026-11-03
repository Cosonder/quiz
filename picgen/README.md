# 单词配图（ChatGPT）

给背单词里的抽象词按例句生成插画。在 ChatGPT 里连接这个仓库后，发送：

> 请读取 GitHub 仓库 Cosonder/quiz 里的 picgen/GPT_INSTRUCTIONS.md，并严格按里面的步骤开始生成图片。

- `GPT_INSTRUCTIONS.md`：给 ChatGPT 的步骤说明和全部场景。
- `scenes.json`：同一份数据（机器可读）。
- `NEW_WORDS.md` / `new-words.json`：扩充词库的新词配图任务；ChatGPT 把原图传到 `inbox/<批次>/`，由 Claude 导入。

这两个文件由 Claude 仓库的 `french-quiz/tools/picgen/build_gpt.py` 生成，同步网站时自动更新，不要直接改。
