---
title: 'Home'
date: 2023-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: hero
    content:
      title: 财多多
      text: 为个人投资者打造的专业级管理工具
      # Hero image (optional)
      image:
        filename: "hero-bg.jpg"
      primary_action:
        url: "/download.html"
        text: "立即下载"
        icon: "arrow-down-tray"
      secondary_action:
        url: "/docs"
        text: "快速入门"
        icon: "book-open"
    design:
      # Hero background color (CSS class)
      css_class: "bg-yellow-100 text-yellow-800 hero-large"
      background:
        image:
          filename: "hero-bg.jpg"
          filters:
            brightness: 1.0

  - block: features
    content:
      title: 核心功能
      items:
        - name: 资产信息中心
          description: 内置价格与PE分析工具，辅助判断市场高低位，科学指导交易。
          icon: chart-info
        - name: 实时行情更新
          description: 支持手动或交易时段每10分钟自动更新资产价格，实时掌握最新持仓市值。
          icon: currency-yen
        - name: 多组合管理
          description: 支持创建多个投资组合，独立或整体追踪每个组合的持仓、交易流水与收益表现。
          icon: chart-pie
        - name: 智能建仓系统
          description: 科学分析历史价格和估值，自动生成分批建仓计划，以优化成本完成初始仓位构建。
          icon: hammer-wrench
        - name: 网格交易系统
          description: 内置专业网格交易策略，自动监控价格波动，执行低吸高抛，捕捉震荡收益。
          icon: arrow-path
        - name: 定投计划系统
          description: 设置定期投资计划，系统基于资产估值自动调整投入金额，实现智能化的周期性投资。
          icon: repeat
        - name: 账户收益曲线
          description: 每日自动记录账户快照，生成交互式收益曲线图表，直观复盘资产增长趋势。
          icon: chart-bar
        - name: 云端自动同步
          description: 本地Excel存储数据，支持自动同步备份至Git云端仓库，数据安全不丢失。
          icon: cloud-arrow-up
        - name: 移动端通知
          description: 关键交易信号与系统状态实时推送至iOS手机，随时随地掌控投资动态。
          icon: device-phone-mobile
    design:
      columns: "3"
      css_class: "bg-gray-50 dark:bg-gray-900"
---
