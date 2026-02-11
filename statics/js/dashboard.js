var timeRecordings = [
    {date: '12:35:24', client: 'Jane Cooper', time: '2h 30m', matter: '86m M4'},
    {date: '12:35:24', client: 'Albert Flo', time: '1h 30m', matter: '86m M4'},
    {date: '12:35:24', client: 'Robert Fox', time: '3h 00m', matter: '86m M4'},
    {date: '12:35:24', client: 'Floyd Miles', time: '2h 00m', matter: '86m M4'}
];

var matterList = [
    {
        dmsCode: '231098',
        title: 'BBird M2',
        client: 'Monica Geller',
        dateOpened: '12 Jan 2024',
        lastTimesheet: '7 days ago',
        budget: '64%',
        solicitor: 'Devon Lane',
        practice: 'Commercial',
        budgetColor: 'green'
    },
    {
        dmsCode: '231098',
        title: 'BBird M2',
        client: 'Monica Geller',
        dateOpened: '12 Jan 2024',
        lastTimesheet: '7 days ago',
        budget: '64%',
        solicitor: 'Floyd Miles',
        practice: 'Commercial',
        budgetColor: 'green'
    },
    {
        dmsCode: '231098',
        title: 'BBird M2',
        client: 'Monica Geller',
        dateOpened: '12 Jan 2024',
        lastTimesheet: '7 days ago',
        budget: '64%',
        solicitor: 'Albert Flores',
        practice: 'Commercial',
        budgetColor: 'green'
    },
    {
        dmsCode: '231098',
        title: 'BBird M2',
        client: 'Monica Geller',
        dateOpened: '12 Jan 2024',
        lastTimesheet: '7 days ago',
        budget: '64%',
        solicitor: 'Jerome Bell',
        practice: 'Commercial',
        budgetColor: 'green'
    },
    {
        dmsCode: '231098',
        title: 'BBird M2',
        client: 'Monica Geller',
        dateOpened: '12 Jan 2024',
        lastTimesheet: '6 month ago',
        budget: '88%',
        solicitor: 'Eleanor Pena',
        practice: 'Commercial',
        budgetColor: 'red'
    },
    {
        dmsCode: '231098',
        title: 'BBird M2',
        client: 'Monica Geller',
        dateOpened: '12 Jan 2024',
        lastTimesheet: 'Today',
        budget: '64%',
        solicitor: 'Guy Hawkins',
        practice: 'Commercial',
        budgetColor: 'green'
    }
];

function loadTimeRecordings() {
    var tbody = document.getElementById('time-recordings-body');
    if (!tbody) return;
    
    var html = '';
    for (var i = 0; i < timeRecordings.length; i++) {
        var record = timeRecordings[i];
        html += '<tr>';
        html += '<td>' + record.date + '</td>';
        html += '<td><div class="user-cell"><span class="user-avatar"></span><span class="user-name">' + record.client + '</span></div></td>';
        html += '<td>' + record.time + '</td>';
        html += '<td>' + record.matter + '</td>';
        html += '</tr>';
    }
    tbody.innerHTML = html;
}

function loadMatterList() {
    var tbody = document.getElementById('matter-list-body');
    if (!tbody) return;
    
    var html = '';
    for (var i = 0; i < matterList.length; i++) {
        var matter = matterList[i];
        var badgeClass = matter.budgetColor === 'green' ? 'status-badge green' : 'status-badge red';
        
        html += '<tr>';
        html += '<td><span style="color: #2563eb;">●</span> ' + matter.dmsCode + '</td>';
        html += '<td>' + matter.title + '</td>';
        html += '<td>' + matter.client + '</td>';
        html += '<td>' + matter.dateOpened + '</td>';
        html += '<td>' + matter.lastTimesheet + '</td>';
        html += '<td><span class="' + badgeClass + '">' + matter.budget + '</span></td>';
        html += '<td><div class="user-cell"><span class="user-avatar"></span><span class="user-name">' + matter.solicitor + '</span></div></td>';
        html += '<td>' + matter.practice + '</td>';
        html += '</tr>';
    }
    tbody.innerHTML = html;
}

function drawLineChart() {
    var canvas = document.getElementById('line-chart');
    if (!canvas) return;
    
    var ctx = canvas.getContext('2d');
    var width = canvas.width = canvas.offsetWidth;
    var height = canvas.height = canvas.offsetHeight;
    
    ctx.clearRect(0, 0, width, height);
    
    var data1 = [30, 45, 35, 55, 45, 60, 50];
    var data2 = [20, 35, 40, 30, 50, 45, 55];
    var data3 = [10, 15, 20, 25, 20, 30, 35];
    
    var padding = 40;
    var chartWidth = width - padding * 2;
    var chartHeight = height - padding * 2;
    
    var maxValue = 70;
    var stepX = chartWidth / (data1.length - 1);
    
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    for (var i = 0; i <= 5; i++) {
        var y = padding + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
    }
    
    function drawLine(data, color) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        for (var i = 0; i < data.length; i++) {
            var x = padding + stepX * i;
            var y = height - padding - (data[i] / maxValue) * chartHeight;
            
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.stroke();
    }
    
    drawLine(data1, '#2563eb');
    drawLine(data2, '#ec4899');
    drawLine(data3, '#10b981');
    
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    ctx.fillStyle = '#6b7280';
    ctx.font = '11px Arial';
    ctx.textAlign = 'center';
    for (var i = 0; i < days.length; i++) {
        var x = padding + stepX * i;
        ctx.fillText(days[i], x, height - 10);
    }
}

function drawDonutChart() {
    var canvas = document.getElementById('donut-chart');
    if (!canvas) return;
    
    var ctx = canvas.getContext('2d');
    var width = canvas.width = canvas.offsetWidth;
    var height = canvas.height = canvas.offsetHeight;
    
    ctx.clearRect(0, 0, width, height);
    
    var centerX = width / 2;
    var centerY = height / 2;
    var radius = Math.min(width, height) / 2 - 20;
    var innerRadius = radius * 0.6;
    
    var data = [
        {value: 48, color: '#2563eb', label: 'Billable'},
        {value: 32, color: '#e5e7eb', label: 'Non-billable'},
        {value: 16, color: '#f59e0b', label: 'Contract writing'}
    ];
    
    var total = 0;
    for (var i = 0; i < data.length; i++) {
        total += data[i].value;
    }
    
    var currentAngle = -Math.PI / 2;
    
    for (var i = 0; i < data.length; i++) {
        var sliceAngle = (data[i].value / total) * 2 * Math.PI;
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle, currentAngle, true);
        ctx.closePath();
        
        ctx.fillStyle = data[i].color;
        ctx.fill();
        
        currentAngle += sliceAngle;
    }
    
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('96/hr', centerX, centerY - 5);
    
    ctx.fillStyle = '#6b7280';
    ctx.font = '12px Arial';
    ctx.fillText('Total', centerX, centerY + 15);
}

document.addEventListener('DOMContentLoaded', function() {
    loadTimeRecordings();
    loadMatterList();
    drawLineChart();
    drawDonutChart();
});

window.addEventListener('resize', function() {
    drawLineChart();
    drawDonutChart();
});
