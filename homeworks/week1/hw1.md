## 交作業流程

1. 確認終端機 (CLI) 視窗的指向路徑是 mentor-program-3rd-{自己的 GitHub ID}
2. 確認目前 git 的狀況 `git status`，若有改動尚未被 commit ，則先處理
3. 處理完後開一個新的分支，`git branch week{$i}`，變數 i 為第幾週就輸入那週
4. 切換分支到剛剛開的新分支`git checkout week{$i}`
5. 開始寫作業，寫完確認後要記得存擋
6. 切換回 CLI 視窗，查看目前 git 的狀況 `git status`，確認尚未被 commit 的檔案
7. 確定無誤後，`git commit -am "{要commit的訊息}"`，可以寫完一隻作業就 commit 一次
8. 確認全部寫完後，push 到 GitHub 上 `git push origin {分支名稱}`
9. 到 GitHub 按下 **Compare & pull request**
10. 確認 base:master 與 compare:{分支名稱} 無誤
11. 輸入標題、可留下評論/心得/問題後按下 **Create pull request**
12. 到第三期交作業的[地方](https://github.com/Lidemy/homeworks-3rd)，建立新 [issue](https://github.com/Lidemy/homeworks-3rd/issues)
13. 標題打上 \[Week{$i}\]，格式必須正確，並在下方貼上步驟 11 產生的網址
14. 等待 Huli 改作業，確認步驟 12 的 issue 已經被 Huli 本人關閉，此時 **pull request** 已經被 merge 至 master
15. 回到 CLI ，切換分支回 master `git checkout master`
16. 抓回 merge 後的 master `git pull origin master`
17. 刪除原先第 3 步驟為了寫作業創立的分支 `git branch -d week{$i}`，交作業完成