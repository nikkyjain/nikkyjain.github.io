// u5 = utils
U5 = {};

U5['LoadSettingToUI'] = function (setting)
{
	$('[data-setting]')
		.each(function()
		{
			var $this = $(this);
			var val;
			val = setting[$this.data('setting')];
			if($this.is('select[data-role=slider]'))
			{
				$this.val(val?'on':'off');
			}else if($this.is('[type=checkbox]'))
			{
				$this.prop('checked',!!val);
			}else{
				$this.val(val);
			}
		});
};

U5['GetSettingFromUI'] = function ()
{
	var setting = {};
	$('[data-setting]').each(function()
	{
		var $this = $(this);
		var val;
		val = $this.val();
		if($this.is('[type=checkbox]'))
		{
			val = $this.prop('checked');
		}else if(/^on|off$/.test(val))
		{
			val = val === 'on';
		}
		//
        
		setting[$this.data('setting')] = val;
	});
	return setting;
};

///////////////////////////////////////////////////////////////
$('form')
.submit(function(e)
        {
            e.preventDefault();
            localStorage['data']=JSON.stringify(U5.GetSettingFromUI());
        });
$('[value=restore]')
.click(function()
       {
           U5.LoadSettingToUI(JSON.parse(localStorage['data']));
       })

