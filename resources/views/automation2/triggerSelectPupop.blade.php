@extends('layouts.popup.large')

@section('content')
	<div class="row">
        <div class="col-md-12">
            <h2 class="mb-3">{{ trans('messages.automation.automation_trigger') }}</h2>
            <p>{{ trans('messages.automation.trigger.intro') }}</p>
                
            <div class="box-list mt-3">
				<div class="box-list mt-5">
					@foreach ($types as $type)
						<a class="box-item trigger-select-but trigger-{{ $type }} shadow-sm
								{{ $trigger->getOption('key') == $type ? 'current' : '' }}
							"
							data-key="{{ $type }}"						
						>							
							<h6 class="d-flex align-items-center text-center justify-content-center">
								<i class="material-icons-outlined me-2">{{ trans('messages.automation.trigger.icon.' . $type) }}</i>
								<span>{{ trans('messages.automation.trigger.' . $type) }}</span></h6>
							<p>{{ trans('messages.automation.trigger.' . $type . '.desc') }}</p>
						</a>
					@endforeach                
            </div>
        </div>
    </div>
@endsection