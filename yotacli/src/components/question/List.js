import React from 'react'
import { Card } from 'react-bootstrap'
import './List.css';

const list = () => {
  return (
    
      <div className="clearheight">
            <div class="pagination"><span>&lt; First</span> <span class="left2">&lt; Previous&nbsp;</span><span class="current-pag">1</span> <span>&nbsp;Next &gt;</span><span class="pagination_question_count"><strong>Questions:</strong> 1</span></div>

            <div class="table " id="dotog_show_qb_table">
	<div class="table-utility row above">
		<div class="col-span-5">


						<div class="dropdown dropdown-x">
				<a class="dropdown-toggle no_anchor" href="#">Options</a>
				<ul class="dropdown-menu">
					<li><a href="#" class="expandAnswers">Expand all answers</a></li>
					<li><a href="#" class="collapseAnswers">Collapse all answers</a></li>
									</ul>
			</div>
			
		</div>

                            <div class="col-span-4 col-btns">
                        		<div class="dropdown">
			<a class="btn btn-analytics dropdown-toggle no_anchor" href="#"><i class="fa fa-plus" aria-hidden="true"></i> Add Questions</a>
			<ul class="dropdown-menu-edit-test-add-questions">
				<li><a href="#" id="askWhereToAddQuestions"><i class="fa fa-plus fa-fw" aria-hidden="true"></i> Add a new question</a></li>
				<li><a href="/a/tests/qb/import"><i class="fa fa-upload fa-fw" aria-hidden="true"></i> Import spreadsheet (.CSV)</a></li>
			</ul>
		</div>
		                    </div>
                    <div class="col-span-1 col-btns">
                        		<div class="dropdown">
			<a class="btn btn-actions btn-white no_anchor" href="#">Actions <span class="caret">&nbsp;</span> </a>
			<ul class="dropdown-menu  edit-test-options">

						            <li><a href="/a/tests/qb/settings/">Edit question settings</a></li>
					<li class="divider"><a href="#" class="qbankExport">Export questions</a></li>
		          

			</ul>
		</div>
		                    </div>
        

			

	</div>


	<div class="table-body question-footer-hover-trigger"><div>
				<div class="row test-question">
				    <a id="q32698331"></a>
					<div class="col-span-25"><h4 class="question-name name">Question 1</h4>
					</div>
					<div class="col-span-1"><span class="caret">&nbsp;</span></div>
					<div class="col-span-55">
						<span class="right"><span class="qb-parent-cat">Generic Parent » </span>Generic</span>
					</div>
					<div class="col-span-1">
						<span class="right">1 pt</span>
					</div>
				</div><div class="row ">
					<div class="editor question"><div class=" qpad">java is a programming language</div>


		<div class="hide" id="dotog_ans32698331">
			<div class="clearheight"></div>

			<table class="answholder"><tbody><tr><td><span class="satick"></span></td>
					<td class="number">A. </td>
					<td class="answer">True</td></tr><tr><td></td>
					<td class="number">B. </td>
					<td class="answer">False</td></tr><tr>
			
			</tr></tbody></table>	<div class="divider-solid"></div>
		<div class="clearheight"></div>
		<table class="qb-q-info">
			<tbody><tr>
				<td><strong>Question Type:</strong></td><td>True False</td>
			</tr>
						<tr>
				<td>Date Added:</td><td class="padleft5">Mon 26th Dec 2022</td>
			</tr>
			<tr>
				<td>Last Modified:</td><td class="padleft5">N/A</td>
			</tr>
			<tr>
				<td>QID#:</td><td class="padleft5">32,698,331</td>
			</tr>
				</tbody></table>

</div>
</div><div class="question-footer-hover opacityon">
			        <div class="divider-solid"></div>
			        <div class="question-footer">
			            <a href="#" id="tog_ans32698331" class="open-close-toggle"><i class="fa fa-expand" aria-hidden="true"></i> Answers</a>
			            <span> | </span>
			            <a href="/a/tests/qb/manage/?all=1&amp;question_id=32698331"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</a><span> | </span><a href="#" class="upgradeRpc"><i class="fa fa-files-o" aria-hidden="true"></i> Duplicate</a><span> | </span><a id="upgradeAccount-32698331" href="#"><i class="fa fa-archive" aria-hidden="true"></i> Archive</a>
            <span> | </span><a id="dq-32698331" href="#"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
			<span> | </span><a id="sqit-32698331"><i class="fa fa-location-arrow" aria-hidden="true"></i> Used In</a>
			</div>
			<div id="dsqit-32698331" class="hidden col-span-7"></div>
			</div></div>
			</div></div>	<div class="table-utility row above noborder">
		<div class="col-span-5">
			<div class="dropdown dropdown-x">
				<a class="dropdown-toggle no_anchor" href="#">Options</a>
				<ul class="dropdown-menu">
					<li><a href="#" class="expandAnswers">Expand all answers</a></li>
					<li><a href="#" class="collapseAnswers">Collapse all answers</a></li>
				</ul>
			</div>

		</div>

        			    <div class="col-span-4 col-btns">
							<div class="dropdown">
			<a class="btn btn-analytics dropdown-toggle no_anchor" href="#"><i class="fa fa-plus" aria-hidden="true"></i> Add Questions</a>
			<ul class="dropdown-menu-edit-test-add-questions">
				<li><a href="#" id="askWhereToAddQuestions"><i class="fa fa-plus fa-fw" aria-hidden="true"></i> Add a new question</a></li>
				<li><a href="/a/tests/qb/import"><i class="fa fa-upload fa-fw" aria-hidden="true"></i> Import spreadsheet (.CSV)</a></li>
			</ul>
		</div>
						</div>
				<div class="col-span-1 col-btns">
							<div class="dropdown">
			<a class="btn btn-actions btn-white no_anchor" href="#">Actions <span class="caret">&nbsp;</span> </a>
			<ul class="dropdown-menu  edit-test-options">

						            <li><a href="/a/tests/qb/settings/">Edit question settings</a></li>
					<li class="divider"><a href="#" class="qbankExport">Export questions</a></li> 
		          

			</ul>
		</div>
						</div>

        

	</div>
	</div>
        </div>
    
  )
}

export default list
